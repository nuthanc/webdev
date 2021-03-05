import express from 'express';
import { json } from 'body-parser';
import mongoose from 'mongoose';
import signupRouter from './routes/signup';

const app = express();
app.use(json());

app.use(signupRouter);

const start = async () => {
  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => console.log('App started on port 3000'));
};

start();
