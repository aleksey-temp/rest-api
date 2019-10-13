import express from 'express';

import { applyMiddleware, applyRoutes } from '.';
import { globalExceptionHandler } from '../exceptions';

const app = express();

applyMiddleware(app);
applyRoutes(app);
app.use(globalExceptionHandler);

export const launch = async port => app.listen(port);
