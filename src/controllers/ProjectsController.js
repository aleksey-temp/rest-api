import { Controller } from '.';
import { Project } from '../models';
import { ValidationException } from '../exceptions';

class _ProjectsController extends Controller {
  getAllProjects = async (req, res) => {
    const projects = await Project.find();

    return res.status(200).json(projects);
  };

  createProject = async (req, res) => {
    this.validate(req);

    const project = new Project(this.only(req.body, ['name', 'description']));

    await project.save();

    return res.status(201).send(project);
  };
}

export const ProjectsController = new _ProjectsController();
