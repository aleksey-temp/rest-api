import { projectValidations } from './project.validations';
import { taskValidations } from './task.validations';

const validationsArr = [projectValidations, taskValidations];

const validations = Object.assign({}, ...validationsArr);

export const validate = handler => validations[handler];
export * from './isMongoID';
