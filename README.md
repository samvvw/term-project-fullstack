# term-project-fullstack

![example workflow](https://github.com/samvvw/term-project-fullstack/actions/workflows/push_workflow.yml/badge.svg)
![example event parameter](https://github.com/samvvw/term-project-fullstack/actions/workflows/push_workflow.yml/badge.svg?event=push)

- Link to project

## Brief description of the app

This app is a production log system for a paper mill, the paper mill has three shift per day. The user creates one log per day, where the production for each shift and raw material is logged, and the rest of resources consumption for the day.

## List of features I'd like to show

This app was built using:

- Node.js - Runtime
- Express.js - Server routing layer
- React.js - Front-end library
- Styled-components
- Webpack - Bundler
- Babel - Transpiler to commonjs
- Jest - Testing library
- Supertest - Test requests
- Eslint - Code lint
- Prettier - Code format
- GitHub Actions - Continuous Integration

## Instructions on how to install the application

```bash
git clone https://github.com/samvvw/term-project-fullstack

cd term-project-fullstack

npm install

```

- In two different terminals run the following commands

```bash

npm run watch

npm run dev

```

- To run the project we need to create a .env file with the following variable definition

```
    PORT=port_number
    NODE_ENV=development
    MONGODB_URL=mongodb-uri
    MONGODB_URL_TEST=mongodb-uri-test
```

- To run Tests

```bash
    npm test
```

## Instructions on how to use your application

Once the application is running in the browser, the user can start creating Production Logs by filling the form that pops up when the "New Log" button is clicked.

The user must fill all the required fields on every page of the form in order to be able to submit.

The fields to fill are: - Mill manager - String - Log date - Date - Coal Used - Number - Electricity consumed - Number - Starch Consumed - Number - Polycationic Consumed - Number - AKD Consumed - Number - Antifoam - Number - Dispro 51 Consumed - Number - Time Lost

- For Each shift (3 shift in total):
  - Shift Manager - String
  - Starched - Boolean
  - Weight - Number
  - Material Produced - Number
  - Raw Material Consumed - Number

## API documentation, including

- Endpoints and methods with a brief description of each
- Response format
- Expected POST body format
- Examples on how to use each endpoint
