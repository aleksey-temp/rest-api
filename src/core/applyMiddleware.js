import { json } from 'express';
import morgan from 'morgan';

export const applyMiddleware = app => {
  app.use(morgan('dev'));

  app.use(json());
};
