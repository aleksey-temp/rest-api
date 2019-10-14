import { Router } from 'express';

import { projectRoutes, taskRoutes } from '../routes';

const router = Router();

export const applyRoutes = app => {
  app.use('/api/projects', projectRoutes(router));

  app.use('/api/tasks', taskRoutes(router));
};
