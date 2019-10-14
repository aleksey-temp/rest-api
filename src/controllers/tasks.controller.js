import { Controller } from '.';
import { Project, Task } from '../models';

class _TasksController extends Controller {
  getTasksForProject = async (req, res) => {
    this.validate(req);

    const project = await this.resourceExists(Project, req.params.projectId);

    const tasks = await Task.find({ project });

    return res.status(200).json(tasks);
  };

  createTask = async (req, res) => {
    this.validate(req);

    const project = await this.resourceExists(Project, req.params.projectId);

    const task = new Task({
      content: req.body.content,
      project: project.id
    });

    await task.save();

    return res.status(201).json(task);
  };

  deleteTask = async (req, res) => {
    this.validate(req);

    const task = await this.resourceExists(Task, req.params.taskId);

    await task.remove();

    return res.status(204).json({});
  };

  toggleTask = async (req, res) => {
    this.validate(req);

    const task = await this.resourceExists(Task, req.params.taskId);

    task.set({ completed: req.body.completed });

    await task.save();

    return res.status(200).json(task);
  };
}

export const TasksController = new _TasksController();
