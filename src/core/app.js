import express from 'express';

import { applyMiddleware, applyRoutes } from '.';

const app = express();

applyMiddleware(app);
applyRoutes(app);

export const launch = async port => app.listen(port);
