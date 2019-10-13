import { projectValidations } from './project.validations';

const validations = Object.assign({}, projectValidations);

export const validate = handler => validations[handler];
