# TypeScript + Express.js API server boilerplate

Use this boilerplate as a template for the API-service apps wrote with TypeScript using the Express framework.

## Edit `package.json`

Update `name`, `author`, `version`, `description`, `license` and `repository` properties of `package.json` file by relevant values.

## Setting up

```bash
npm run install # install all packages
```

## Development

In order to build application use `npm run build` command.

Run `npm start` (equivalent of `npm run start`) to launch application. This command will only run the built application so you have to call `npm run build` explicitly prior to this action.

Execute `npm run dev` in order to start developer server. It will watch for any updates in source code, rebuild and relaunch application each time changes would be saved.

TSLint is set to track code style through all the project in real time. Execute `npm run lint` to run explicit linter check and show the list of issues. In addition `npm run lint:fix` to forcibly fix all the issues. Edit `tslint.json` file in order to update linter rules.

In order to run the unit test use `npm run unit-test` command. It will rebuild the application and the unit tests source code, run them, and put the output to the console. If you're intended to run the unit tests in CI you'll most likely want to see the test results gathered in one single XML-report that might be parsed and visualized. For such a case, you may use `npm run unit-test:ci` instead.
