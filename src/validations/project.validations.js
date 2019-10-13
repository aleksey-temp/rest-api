import { body } from 'express-validator';

export const projectValidations = {
  createProject: [
    body('name')
      .trim()
      .escape()
      .not()
      .isEmpty()
      .withMessage('Name cannot be blank')
      .isLength({ min: 2, max: 120 })
      .withMessage('Name may contain from 2 to 120 characters'),

    body('description')
      .trim()
      .escape()
      .not()
      .isEmpty()
      .withMessage('Description cannot be blank')
      .isLength({ min: 4, max: 255 })
      .withMessage('Description may contain from 4 to 255 characters')
  ]
};
