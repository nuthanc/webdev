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

### SignUp Form

* Add SignUp form in the Index page
* Now moved to pages/auth/signup.js

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
