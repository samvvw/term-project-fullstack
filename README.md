# term-project-fullstack

![example workflow](https://github.com/samvvw/term-project-fullstack/actions/workflows/push_workflow.yml/badge.svg)

[WMDD4936-svillegaswarre00](https://wmdd4936-svillegaswarre00.herokuapp.com/)

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

Besides from the project requirements and what we have learned in class, I focused also on implementing some features a real project would have.
Like server route testing, react component and snapshot testing, keeping a clean code using Eslint, using a bundle analyzer plugin for webpack, creating dynamically the index.html and injecting automatically the necessary scripts for the project.

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

```env
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

The fields to fill are:

- Mill manager - String
- Log date - Date
- Coal Used - Number
- Electricity consumed - Number
- Starch Consumed - Number
- Polycationic Consumed - Number
- AKD Consumed - Number
- Antifoam - Number
- Dispro 51 Consumed - Number
- Time Lost - Number

- For Each shift (3 shift in total):
  - Shift Manager - String
  - Starched - Boolean
  - Weight - Number
  - Material Produced - Number
  - Raw Material Consumed - Number

## API documentation, including

- Endpoints and methods with a brief description of each

  - **POST**

    - **Endpoint**

    - '/api/v1/production-log'

    - **Request Body Example**

      ```json
      {
        "date": "2021-10-15",
        "millManager": "John Doe",
        "firstShift": {
          "shiftManager": "Jane Doe",
          "materialType": {
            "starched": "true",
            "weight": "160"
          },
          "materialProduced": "21000",
          "rawMaterialConsumed": "22000"
        },
        "secondShift": {
          "shiftManager": "Mary Doe",
          "materialType": {
            "starched": "false",
            "weight": "180"
          },
          "materialProduced": "21600",
          "rawMaterialConsumed": "22500"
        },
        "thirdShift": {
          "shiftManager": "Tom Doe",
          "materialType": {
            "starched": "false",
            "weight": "140"
          },
          "materialProduced": "22000",
          "rawMaterialConsumed": "22600"
        },
        "coalUsed": "500",
        "electricityConsumed": "23000",
        "starchConsumed": "200",
        "polycationicConsumed": "250",
        "akdConsumed": "500",
        "antifoamConsumed": "200",
        "dispro51Consumed": "233",
        "timeLost": "2"
      }
      ```

    - **Response format**

    ```json
    {
      "shiftProduction": {
        "firstShift": {
          "materialType": {
            "starched": true,
            "weight": 180
          },
          "shiftManager": "Arcila",
          "materialProduced": 19900,
          "rawMaterialConsumed": 21000,
          "_id": "6189b4b7bfcc852bf6f10d80",
          "fiberLoss": 5.238095238095238,
          "id": "6189b4b7bfcc852bf6f10d80"
        },
        "secondShift": {
          "materialType": {
            "starched": false,
            "weight": 160
          },
          "shiftManager": "Pepe",
          "materialProduced": 21900,
          "rawMaterialConsumed": 22100,
          "_id": "6189b4b7bfcc852bf6f10d81",
          "fiberLoss": 0.904977375565611,
          "id": "6189b4b7bfcc852bf6f10d81"
        },
        "thirdShift": {
          "materialType": {
            "starched": true,
            "weight": 140
          },
          "shiftManager": "Jose",
          "materialProduced": 20900,
          "rawMaterialConsumed": 21100,
          "_id": "6189b4b7bfcc852bf6f10d82",
          "fiberLoss": 0.9478672985781991,
          "id": "6189b4b7bfcc852bf6f10d82"
        },
        "totalProduction": 62700,
        "totalRawMaterial": 64200,
        "totalFiberLoss": 2.336448598130841
      },
      "_id": "6189b4b7bfcc852bf6f10d7f",
      "date": "2020-09-01T07:00:00.000Z",
      "millManager": "Jorge",
      "coalUsed": 3000,
      "electricityConsumed": 212000,
      "starchConsumed": 200,
      "polycationicConsumed": 250,
      "akdConsumed": 300,
      "antifoamConsumed": 220,
      "dispro51Consumed": 222,
      "timeLost": 4,
      "createdAt": "2021-11-08T23:37:27.703Z",
      "updatedAt": "2021-11-08T23:37:27.703Z",
      "__v": 0,
      "id": "6189b4b7bfcc852bf6f10d7f"
    }
    ```

  - **GET**

    - **Endpoint**

    - '/api/v1/production-log'

    - **Resoponse example**

    ```json
    [
      {
        "shiftProduction": {
          "firstShift": {
            "materialType": {
              "starched": true,
              "weight": 180
            },
            "shiftManager": "Arcila",
            "materialProduced": 19900,
            "rawMaterialConsumed": 21000,
            "_id": "6189b4b7bfcc852bf6f10d80",
            "fiberLoss": 5.238095238095238,
            "id": "6189b4b7bfcc852bf6f10d80"
          },
          "secondShift": {
            "materialType": {
              "starched": false,
              "weight": 160
            },
            "shiftManager": "Pepe",
            "materialProduced": 21900,
            "rawMaterialConsumed": 22100,
            "_id": "6189b4b7bfcc852bf6f10d81",
            "fiberLoss": 0.904977375565611,
            "id": "6189b4b7bfcc852bf6f10d81"
          },
          "thirdShift": {
            "materialType": {
              "starched": true,
              "weight": 140
            },
            "shiftManager": "Jose",
            "materialProduced": 20900,
            "rawMaterialConsumed": 21100,
            "_id": "6189b4b7bfcc852bf6f10d82",
            "fiberLoss": 0.9478672985781991,
            "id": "6189b4b7bfcc852bf6f10d82"
          },
          "totalProduction": 62700,
          "totalRawMaterial": 64200,
          "totalFiberLoss": 2.336448598130841
        },
        "_id": "6189b4b7bfcc852bf6f10d7f",
        "date": "2020-09-01T07:00:00.000Z",
        "millManager": "Jorge",
        "coalUsed": 3000,
        "electricityConsumed": 212000,
        "starchConsumed": 200,
        "polycationicConsumed": 250,
        "akdConsumed": 300,
        "antifoamConsumed": 220,
        "dispro51Consumed": 222,
        "timeLost": 4,
        "createdAt": "2021-11-08T23:37:27.703Z",
        "updatedAt": "2021-11-08T23:37:27.703Z",
        "__v": 0,
        "id": "6189b4b7bfcc852bf6f10d7f"
      }
    ]
    ```

  - **DELETE**

    - **Endpoint**

    - '/api/v1/production-log/:logId'
