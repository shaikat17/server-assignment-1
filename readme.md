# Project Name

A brief description of ecommerce server project.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Testing](#testing)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (version 14.x or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [TypeScript](https://www.typescriptlang.org/) (optional, if you want to compile TypeScript manually)

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/shaikat17/server-assignment-1.git

2. **npm install**
3. **npm run start**


**API Documentation**

Home Route: 
GET /

**Products Routes:**

GET /api/products - Get all products

POST /api/products - Create a new product

GET /api/products/:productId - Get a single product by ID

PUT /api/products/:productId - Update a product by ID

DELETE /api/products/:productId - Delete a product by ID

GET /api/products/search?searchTerm=iphone - Search for products


**Orders Routes:**

GET /api/orders - Get all orders

GET /api/orders?email=user@example.com - Get orders by email

POST /api/orders - Create a new order