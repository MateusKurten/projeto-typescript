# Donations Manager
## Description

AdminJS project for managing donations.

[GitHub Repository](https://github.com/MateusKurten/projeto-typescript)

## Technologies and Tools Used

- **Socket.io (Communication via Socket):** Socket.io is used to enable real-time communication between the server and clients.

- **Docker:** Docker is used for containerization, allowing you to package the application and its dependencies in a consistent environment.

- **Typescript:** Typescript is a statically typed superset of JavaScript that enhances code quality, provides better tooling, and helps catch errors during development.

- **Node.js (Express):** Node.js is the runtime environment used for server-side development, and Express.js is a popular web application framework for Node.js.

- **MongoDB (Mongoose ORM):** MongoDB is a NoSQL database that is used for storing and retrieving data. Mongoose is an ODM (Object-Document Mapping) library for MongoDB, simplifying database interactions and providing schema validation.

- **MySQL (Sequelize ORM):** MySQL is a relational database used for structured data storage. Sequelize is an ORM (Object-Relational Mapping) library for MySQL, making it easier to work with relational databases by mapping database records to JavaScript objects.

- **AdminJS Framework:** AdminJS is a framework for building administrative interfaces. It provides a user-friendly admin panel to manage and monitor your application's data, making it easier to perform CRUD operations and manage resources.

## Requirements

- Docker

## Installation

```bash
# Copy the env file
$ cp .env.example .env

# Building images
$ docker-compose build --no-cache
```
If necessary, update the .env file with the correct information.

After the images are created, run the following commands:

```bash
# Run in the background
$ docker-compose up -d

# Accessing Node container:
$ docker-compose exec app bash

# Install Node libraries
$ yarn install
```

## Migrations

```bash
# Perform migrations and seed the database tables (Node container):
$ npx sequelize-cli db:migrate
$ npx sequelize-cli db:seed:all
```

## Running the application

```bash
$ docker-compose up -d
$ yarn start-dev
```