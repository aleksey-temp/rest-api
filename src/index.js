import dotenv from 'dotenv';

import { launch, connectDb } from './core';

dotenv.config();

const port = process.env.PORT;

connectDb()
  .then(() => console.log('DB connected'))
  .catch(err => console.log('DB connection error: ', err))
  .then(() => launch(port))
  .then(() => console.log('Server started'));
