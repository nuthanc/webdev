const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'nuthanc',
    password: '',
    database: 'smart-brain',
  },
});

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  // db.select('*')
  //   .from('users')
  //   .then((users) => {
  //     if (users.length) res.send(users);
  //     else res.status(400).json('No users');
  //   })
  //   .catch((err) => res.status(400).json('Error'));
  res.send('it is working');
});

app.post(
  '/signin',
  signin.handleSignin(db, bcrypt) // Similar to signin.handleSignin(db, bcrypt)(req, res), req,res gets passed automatically
);

app.post('/register', (req, res) => {
  register.handleRegister(req, res, db, bcrypt);
});

app.get('/profile/:id', (req, res) => {
  profile.handleProfileGet(req, res, db);
});

app.put('/image', (req, res) => {
  image.handleImage(req, res, db);
});

app.post('/imageurl', (req, res) => {
  image.handleApiCall(req, res);
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`App listening on port ${process.env.PORT}`)
);
