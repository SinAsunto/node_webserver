# Curso Node Webserver

This project is a simple Node.js web server using Express and Handlebars (hbs) for templating.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/SinAsunto/node_webserver.git
    ```
2. Navigate to the project directory:
    ```sh
    cd node_webserver
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Create a `.env` file in the root directory and set the `PORT` variable:
    ```env
    PORT=3000
    ```
2. Start the server:
    ```sh
    npm start
    ```
3. Open your browser and navigate to `http://localhost:3000`.

## Routes

- `/generic`: Renders the `generic.hbs` view.
- `/elements`: Renders the `elements.hbs` view.
- `*`: Serves the `404.html` file for any undefined routes.

## Dependencies

- [Express](https://www.npmjs.com/package/express): Fast, unopinionated, minimalist web framework for Node.js.
- [hbs](https://www.npmjs.com/package/hbs): Express.js view engine for Handlebars.js.
- [dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a `.env` file into `process.env`.