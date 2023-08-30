# Donations Manager
## Description

AdminJS project for managing donations.

[GitHub Repository](https://github.com/MateusKurten/projeto-typescript)

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