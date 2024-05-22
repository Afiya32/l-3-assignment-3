                                                                 Assignment-2
Overview
This project is a Node.js application that provides an API for managing a product inventory. The backend is built with Express and TypeScript, using MongoDB for data storage. The application is deployed on Vercel.

Features
API Endpoints: Provides CRUD operations for products.
Inventory Management: Tracks product quantities and stock status.
TypeScript: Ensures type safety and code quality.
Linting and Formatting: Uses ESLint and Prettier for consistent code style.
Environment Configuration: Manages configuration using dotenv.
Deployment: Deployed on Vercel for easy access and scalability.
Tech Stack
Node.js: JavaScript runtime.
Express: Web framework for Node.js.
TypeScript: Typed superset of JavaScript.
MongoDB: NoSQL database.
Vercel: Cloud platform for static sites and serverless functions.
ESLint: Linting utility for JavaScript and TypeScript.
Prettier: Code formatter.
Installation
To run this project locally, follow these steps:

Clone the repository:


git clone (https://github.com/Afiya32/l-3-assignment-3.git)
cd assignment-2
Install dependencies:


npm install
Set up environment variables:
Create a .env file in the root directory and add the necessary environment variables:

makefile

MONGO_URI=your-mongodb-uri
PORT=5000
Build the project:


npm run build
Start the project:
For development:


npm run start:dev
For production:


npm run start:prod
Scripts
build: Compiles TypeScript to JavaScript.
start:prod: Runs the compiled JavaScript code.
start:dev: Runs the TypeScript code with ts-node-dev for hot-reloading.
lint: Lints the code using ESLint.
lint:fix: Automatically fixes linting issues.
prettier:fix: Formats the code using Prettier.
prettier: Checks code formatting with Prettier.
Deployment
The project is deployed on Vercel. To deploy, follow these steps:

Install Vercel CLI:


npm install -g vercel
Deploy the project:


vercel --prod
This will build and deploy the project. You can monitor the deployment at the URL provided by Vercel.

Folder Structure

.
├── dist                # Compiled output
├── node_modules        # Node.js modules
├── src                 # Source files
│   ├── controllers     # Controllers for handling API requests
│   ├── models          # Mongoose models
│   ├── routes          # API routes
│   ├── server.ts       # Entry point of the application
│   └── utils           # Utility functions
├── .env                # Environment variables
├── .eslintrc.js        # ESLint configuration
├── .prettierrc         # Prettier configuration
├── package.json        # Project metadata and dependencies
├── tsconfig.json       # TypeScript configuration
└── vercel.json         # Vercel configuration
API Endpoints
Products
GET /api/products: Fetch all products.
GET /api/products/:id: Fetch a single product by ID.
POST /api/products: Create a new product.
PUT /api/products/:id: Update a product by ID.
DELETE /api/products/:id: Delete a product by ID.
Orders
GET /api/orders: Fetch all orders.
GET /api/orders/:id: Fetch a single order by ID.
POST /api/orders: Create a new order.
License
This project is licensed under the ISC License. See the LICENSE file for details.

Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
