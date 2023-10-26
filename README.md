# Country Wiki Application (Frontend)

## Overview

The Country Wiki application is a web-based platform that provides users with information about countries. Users can search for countries using a search bar and have the option to search by country code, language, or name.

## Technologies Used

- **Vite:** A fast web development build tool that provides a smooth development experience with features like hot module replacement (HMR).
- **npm:** A package manager for JavaScript that allows you to install and manage project dependencies.
- **TypeScript:** A typed superset of JavaScript that adds static typing to the language.
- **ESLint:** A tool for identifying and fixing code style and potential programming errors.
- **Bulma:** A modern CSS framework based on Flexbox. It is used for styling and creating a responsive and visually appealing user interface.

## Hosting

The application is hosted on [Vercel](https://country-app-sooty-five.vercel.app/). Vercel provides an easy and scalable platform for hosting web applications.

## Getting Started

To run the application locally, follow these steps:

1. Install:

   ```bash
   cd frontend
   npm install
   ```

2. Run:

   ```bash
   npm run dev
   ```

3. Lint:

   ```bash
   npm run dev
   ```

# Country API (Backend)

## Overview

The Country API is an Express.js-based RESTful API that interacts with the [REST Countries API](https://restcountries.com/). It provides endpoints to retrieve information about countries, such as all countries, countries by name, country by code, and countries by language.

## Project Structure

- **`index.js`:** Entry point of the application. It initializes the Express app, sets up middleware (CORS, error handling), and defines routes.

- **`controllers/countriesController.js`:** Defines the API routes for fetching country data. Utilizes Axios for making requests to the REST Countries API.

- **`models/countryModel.js`:** Represents the Country model, mapping data received from the REST Countries API to a standardized format.

- **`middleware/errorMiddleware.js`:** Custom middleware for handling errors in the Express app.

- **`package.json`:** Configuration file specifying project details, dependencies, and scripts.

## API Endpoints

### 1. Get All Countries

- **Endpoint:** `/countries/all`
- **Method:** `GET`
- **Description:** Retrieves information about all countries.

### 2. Get Countries by Name

- **Endpoint:** `/countries/name/:name`
- **Method:** `GET`
- **Description:** Retrieves information about countries based on their names.

### 3. Get Country by Code

- **Endpoint:** `/countries/code/:code`
- **Method:** `GET`
- **Description:** Retrieves detailed information about a country based on its code.

### 4. Get Countries by Language

- **Endpoint:** `/countries/language/:language`
- **Method:** `GET`
- **Description:** Retrieves information about countries based on their primary language.

## Hosting

The application is hosted on [Heroku](https://countrynodejs-1c8a69fb5708.herokuapp.com). Heroku offers a scalable and user-friendly platform for hosting web applications.

## Getting started

To run the application locally, follow these steps:

1. Install Dependencies

   ```bash
   cd backend
   npm install
   ```

2. Run

   ```bash
   npm start ||
   nodemon index.js
   ```
