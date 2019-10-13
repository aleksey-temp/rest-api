import { validationResult } from 'express-validator';

import { ValidationException } from '../exceptions';

export class Controller {
  validate = req => {
    const result = validationResult(req);

    if (!result.isEmpty()) {
      const errors = this.getErrorsObject(result.mapped());

      throw new ValidationException(errors);
    }
  };

  getErrorsObject = errors => {
    const obj = {};

    for (let key in errors) {
      obj[key] = errors[key].msg;
    }

    return obj;
  };

  only = (originalObj, includedProps) => {
    const obj = {};

    for (let prop of includedProps) {
      if (typeof originalObj[prop] !== 'undefined')
        obj[prop] = originalObj[prop];
    }

    return obj;
  };
}
