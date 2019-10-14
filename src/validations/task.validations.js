import { body } from 'express-validator';

export const taskValidations = {
  createTask: [
    body('content')
      .trim()
      .escape()
      .not()
      .isEmpty()
      .withMessage('Content cannot be blank')
      .isLength({ min: 2, max: 100 })
      .withMessage('Content may contain from 2 to 100 characters')
  ],

  toggleTask: [
    body('completed')
      .isBoolean()
      .withMessage('Completed may contain only true or false')
  ]
};
