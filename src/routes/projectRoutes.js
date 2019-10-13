import { getAllProjects } from '../handlers';
import { catchException } from '../exceptions';

export const projectRoutes = router => {
  router.get('/', catchException(getAllProjects));

  return router;
};
