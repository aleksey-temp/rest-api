import { Router } from 'express';

import { projectRoutes } from '../routes';

const router = Router();

export const applyRoutes = app => {
  app.use('/api/projects', projectRoutes(router));
};
