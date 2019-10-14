import { Controller } from '.';
import { Project } from '../models';

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

  getProjectById = async (req, res) => {
    this.validate(req);

    const project = await this.resourceExists(Project, req.params.projectId);

    return res.status(200).json(project);
  };

  deleteProject = async (req, res) => {
    this.validate(req);

    const project = await this.resourceExists(Project, req.params.projectId);

    /**
     * Associated tasks are removed
     * in 'pre' hook on 'Project' model
     */
    await project.remove();

    return res.status(204).json({});
  };
}

export const ProjectsController = new _ProjectsController();
