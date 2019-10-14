import { TasksController } from '../controllers';
import { catchException } from '../exceptions';
import { validate, isMongoID } from '../validations';

export const taskRoutes = router => {
  router.get(
    '/project/:projectId',
    isMongoID('projectId'),
    catchException(TasksController.getTasksForProject)
  );

  router.post(
    '/project/:projectId',
    isMongoID('projectId'),
    validate('createTask'),
    catchException(TasksController.createTask)
  );

  router.delete(
    '/:taskId',
    isMongoID('taskId'),
    catchException(TasksController.deleteTask)
  );

  router.patch(
    '/:taskId/toggle',
    isMongoID('taskId'),
    validate('toggleTask'),
    catchException(TasksController.toggleTask)
  );

  return router;
};
