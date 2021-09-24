# Terveystalo_backend
Repository consists backend code of the code challenge that was assigned to me

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
