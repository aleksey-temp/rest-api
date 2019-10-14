import { ProjectsController } from '../controllers';
import { catchException } from '../exceptions';
import { validate, isMongoID } from '../validations';

export const projectRoutes = router => {
  router.get('/', catchException(ProjectsController.getAllProjects));

  router.get(
    '/:projectId',
    isMongoID('projectId'),
    catchException(ProjectsController.getProjectById)
  );

  router.post(
    '/',
    validate('createProject'),
    catchException(ProjectsController.createProject)
  );

  router.delete(
    '/:projectId',
    isMongoID('projectId'),
    catchException(ProjectsController.deleteProject)
  );

  return router;
};
