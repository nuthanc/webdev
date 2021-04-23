### Setup 

```sh
npm i nodemon --save-dev
npm i express body-parser
```

### Quick note on bcrypt-nodejs

* Use bcrypt or bcrypt.js
### CORS

```sh
npm i cors
```
* To avoid CORS error

### Setting up DB for our Project

```sh
createdb 'smart-brain';

CREATE TABLE users (
  id serial PRIMARY KEY,
  name VARCHAR(100),
  email text UNIQUE NOT NULL,
  entries BIGINT DEFAULT 0,
  joined TIMESTAMP NOT NULL
);

CREATE TABLE login (
  id serial PRIMARY KEY,
  hash VARCHAR(100),
  email text UNIQUE NOT NULL
);
```
* Use Knex.js or Pg-promise
```sh
cd api
npm i knex
npm install pg
```
* Rest of db data in api README

### Working with Postgres

* http://knexjs.org/

### Transaction in Postgres

* Creating transaction while registering so that if one operation fails, then all fails
