class Configuration {
    public readonly serverPort: number;

    constructor() {
        this.serverPort = Number(process.env.SERVER_PORT);
        console.log(this.serverPort);
    }
}

export const configuration = new Configuration();
