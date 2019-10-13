import { ProjectsController } from '../controllers';
import { catchException } from '../exceptions';
import { validate } from '../validations';

export const projectRoutes = router => {
  router.get('/', catchException(ProjectsController.getAllProjects));

  router.post(
    '/',
    validate('createProject'),
    catchException(ProjectsController.createProject)
  );

  return router;
};
