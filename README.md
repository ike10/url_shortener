## Next.js URL Shortener
This is a simple URL shortener app built with Next.js and MongoDB. It allows users to create short URLs for long links and share them with others.

## Getting Started
To run this app locally, you'll need to have Node.js and MongoDB installed on your machine. You can then follow these steps:

1. Clone this repository to your local machine using git clone https://github.com/your-username/nextjs-url-shortener.git
2. Navigate to the project directory using cd nextjs-url-shortener
3. Install the dependencies using npm install
4. Create a .env.local file in the project root and add the following environment variables:
makefile
5. Copy code
``` env
MONGODB_URI=<your-mongodb-uri>
MONGODB_DB=<your-mongodb-database-name>
```
4. Start the app using npm run dev
5. Open your web browser and navigate to http://localhost:3000

## Usage
To create a short URL, enter the long link into the input field on the home page and click the "Shorten" button. The app will generate a unique shortened URL that you can copy and share with others.

To view the list of all shortened URLs, navigate to the "/urls" page using the link in the navigation menu. From there, you can click on the "Edit" button to update the long link or "Delete" button to remove the shortened URL.

To use a shortened URL, simply enter it into the address bar of your web browser and press Enter. You will be redirected to the original long link.

## Architecture
This app is built with Next.js, a popular React-based framework for building server-side-rendered (SSR) web applications. The frontend is built using Chakra UI, a component library for React that provides a set of customizable UI components.

The backend is built with Node.js and Express, and uses MongoDB as the database. The app uses the mongoose library to interact with the MongoDB database and store and retrieve shortened URLs.

The app is deployed on Heroku, a cloud platform that allows you to deploy, manage, and scale your apps. The deployment process is automated using GitHub Actions, a continuous integration and continuous deployment (CI/CD) tool.

## Contributing
If you would like to contribute to this project, you can fork this repository and submit a pull request with your changes. Please make sure to follow the existing coding style and conventions.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.