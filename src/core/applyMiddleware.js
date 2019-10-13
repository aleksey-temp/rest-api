import { json } from 'express';
import morgan from 'morgan';

import { globalExceptionHandler } from '../exceptions';

export const applyMiddleware = app => {
  app.use(morgan('dev'));

  app.use(json());

  app.use(globalExceptionHandler);
};
