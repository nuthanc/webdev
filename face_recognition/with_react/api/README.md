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

### Security Review

* Doesn't have validation like email and password
  * Blank username and password while registering
* Backend server never trusts validation done by the Frontend
  * It should do its own validation
* Careful of API keys
  * Solution is to move that key from Frontend to Backend

### Environment Variables

```sh
# In bash
PORT=3000 node index.js
# Then in index.js listen to process.env.PORT

# In Fish
env PORT=3000 node index.js
```

### Deploying On Heroku: Backend and DB

* We can have Frontend of Github Pages, Backend and DB on heroku
* Or we can have all 3 in different Platforms

* Heroku Documentation -> Deploying with Git (https://devcenter.heroku.com/articles/git)
```sh
heroku create
git remote -v
git push heroku master 
# If there is an error
heroku git:remote -a <existing app name>
heroku open
heroku logs --tail
```
* Replace all the links in front-end to point to Heroku's given domain
* Go to Databases section in Heroku and Install Heroku Postgres to the created App
```sh
heroku addons
heroku pg:info
heroku pg:psql

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

# To check the tables
\d

heroku addons
# Change host in index.js for Postgres to process.env.DATABASE_URL and use connectionString as key instead of host
# Some error, check Connecting in Node.js docs in Heroku docs
# You see only host and ssl fields

heroku config
```

### Deploying on Heroku: Front-end

* Create new App for Front-end in Heroku
```sh
heroku login
heroku git:remote -a <app-name>
git add .
git commit -m "Deploy"
git push heroku master

```
* That's it!!!
* All we had to is point them correctly