# Face Recognition with Next

### The App

* Sign In and Register in Header
* If not Signed In, Home page shows Sign In form
* Else
  * It shows Some Brain Image on Top Left, Sign Out in Top Right
  * SearchBar and Detect
  * Some description about the SearchBar above it
  * When Image URL is entered in the SearchBar, it automatically loads it after the SearchBar
  * When Detect is pressed, it puts a square around the faces
### Getting started

```sh
# Traditional way
mkdir client
cd client
npm init -y
npm install react react-dom next axios
mkdir pages

# New way(I'm following this)
npx create-next-app client --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"
npm i bootstrap
```

### _app.js for Global CSS

* Import bootstrap in _app.js for Global CSS

### SignUp and SignIn Form

* Add SignUp form in the Index page
* Now moved to pages/auth/signup.js
* Then made a Component called Form for reuse in signin.js

### Auth dir

```sh
mkdir auth
cd auth
npm init -y
npm i typescript express @types/express ts-node-dev
tsc --init
mkdir src
touch src/index.ts
npm start
```

### Docker and Skaffold setup

* Add Dockerfile and .dockerignore
* Add infra/k8s
* Add depl files there and ingress-srv
* Enable addon of ingress in minikube
* Add face.dev to /etc/hosts
* Add skaffold.yaml
* skaffold dev

### Mongoose and Mongo setup in auth

```sh
cd auth
npm i mongoose @types/mongoose
npm i express-validator
```
* Create auth-mongo-depl.yaml in infra k8s

### Auth model

* Create models/user.ts in auth
* toJSON for json representation of User Model
  * the password, _id and __v are just being deleted in the JSON representation and not in the actual User model
* Since we are using json from body-parser as middleware, all our requests and responses are converted to json
* **this** in pre middleware's save is a **Document object**
### Use my common middleware

```sh
npm i @rztickets/common
```
* Use this for middlewares and errors

### Error Handling

* Need express-async-errors, otherwise we get some Promise error

### JWT and cookie-session

```sh
npm i cookie-session 
npm i --save-exact @types/cookie-session@2.0.39
npm i jsonwebtoken @types/jsonwebtoken
```

### Create routes in auth 

* 4 routes: sign up, sign in, sign out and current user

### Signing Up and In

* While signing up and signing in, validate the body using express-validator's body
* Check for existingUser in the db
* Build if it doesn't exist
* Save 
* Then create jwt using jwt.sign 
* Provide JWT key as 2nd argument, which is passed from kubectl secret to deployment file
* Then attach jwt to req.session(Need to learn Cookie middleware internals) and send the user as Response along with status code

### Tests
```sh
cd auth
npm install --save-dev @types/jest @types/supertest jest ts-jest supertest mongodb-memory-server
```
* supertest for assigning ephemeral port
  * If multiple services listen on the same port, we are gonna have some problem
* Since we are running tests locally, we need a db
* For this, we use mongodb-memory-server
* Also with in memory mongo, we can run multiple databases at the same time
  * Tests for different services concurrently on the same machine
* Add test configurations in package.json
* setup done in test/setup.ts

### Clarifai

* Sign Up to Clarifai
* Get Clarifai API key in my-first-application Dashboard
```sh
cd client && npm i clarifai
```