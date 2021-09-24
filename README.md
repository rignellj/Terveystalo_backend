# Terveystalo_backend
Repository consists backend code of the code challenge that was assigned to me

## Table of contents
* [Available Scripts](#available-scripts)
* [Technologies](#technologies)
* [Endpoints](#endpoints)
* [Input Validation](#input-validation)
* [Error Handling](*error-handling)

## Available Scripts

In the project directory, you can run:

### `npm run back`

Runs the backend app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

### `npm run front`

Runs the frontend app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.\
Be sure about the corrext port since `3000` is the port which was utilized as frontend port.\
Also be sure to rename frontend folder to be same as in the script.

### `npm run dev`

Combines `npm run back` and `npm run front` as one command for `concurrently`. This enables to run fullstack app on one terminal.\
Client (frontend) is colored as red and server is colored as magenta.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run rmBuild`

Removes the build folder.\
`npm run rmBuild` was created as utility script to be run before running test script in order to avoid unnecessary testing for build folder.

## Technologies
Project is created with:
* Typescript
* Node.js

## Endpoints
1. /api/checkprime
2. /api/sum

`/api/checkprime` and `/api/sum` are expecting to get query params: `number` or `numbers`, respectively, in the request object.

#### 1. /api/checkprime
If no errors occur in the `/api/checkprime` endpoint, the response is either:
- `res.status(200).json({ isPrime: true });`
- `res.status(200).json({ isPrime: false });`

depending whether the requested number was prime number or not.

#### 2. /api/sum
If no errors occur in the `/api/sum` endpoint, the response is either:
- `res.status(200).json({ result: sum, isPrime: true });`
- `res.status(200).json({ result: sum, isPrime: false });`

depending whether the requested numbers' sum was prime number or not.

## Input Validation

User input will be checked against regex pattern `/^(\d|,)+$/` in the `/api/sum` and `/^\d+$/` in the `/api/checkprime`\
Where:
- ^ match at the start
- $ match at the end
- \d matches any digit (Arabic numeral). Equivalent to [0-9]
- '+' Matches the preceding item "(\d|,)" 1 or more times. 
- (\d|,) matches either digit or ","

Basically `/api/sum` accepts only digits [0-9] and commas and `/api/checkprime` just digits.

## Error Handling

- If no `number` or `numbers` are sent as request to app, it responds with `400 status code` and sends message `You didn't send any input.` And the error handling middleware will take care of the sending the response.
- If `validateNumbers` or `validateNumber` functions detect error in the input then `400 status code` is sent.
- Also descriptive error message is sent as response.



