import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { User } from '../models/user';


const router = express.Router();

router.post('/api/auth/signup', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log({ email, password });
  const user = User.build({
    email, password
  });
  await user.save();
  res.send(user);
});

export default router;