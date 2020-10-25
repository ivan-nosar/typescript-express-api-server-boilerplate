import * as bodyParser from "body-parser";
import * as express from "express";
import { Application } from "express";
import { logger } from "../logger";
import { configuration } from "../configuration";

export class Service {
    private readonly app: Application;
    private readonly port: number;

    constructor() {
        this.app = express();
        const { serverPort } = configuration;
        this.port = serverPort;

        this.initializeMiddleware();
        this.initializeRoutes();
        this.initializeErrorHandlers();
    }

    public async start() {
        try {
            this.app.listen(this.port, () => {
                logger.log(`App listening on the http://localhost:${this.port}`);
            });
        } catch (error) {
            logger.error("Unexpected error: Starting server");
            logger.error(error);
        }
    }

    private initializeMiddleware() {
        const commonMiddlewares = [
            bodyParser.json(),
            bodyParser.urlencoded({ extended: true }),
            (req: any, _: any, next: any) => {
                logger.log(`Request: ${req.method} ${req.path}`);
                next();
            }
        ];

        commonMiddlewares.forEach(middleware => {
            this.app.use(middleware);
        });
    }

    private initializeRoutes() {
        // TODO: Initialize controllers

        this.app.get("/status", (request: any, response: any, _: any) => {
            response.send({ status: "ok" });
        });

        // const controllers: BaseController[] = [
        //     ...
        // ];

        // controllers.forEach(controller => {
        //     this.app.use("/", controller.router!);
        // });
    }

    private initializeErrorHandlers() {
        this.app.use((request: any, response: any, _: any) => {
            response.status(404).send(`Unresolved route: ${request.method} ${request.path}`);
        });
    }
}
