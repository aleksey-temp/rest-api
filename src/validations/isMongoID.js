import { param } from 'express-validator';

export const isMongoID = paramName => [
  param(paramName)
    .trim()
    .escape()
    .isMongoId()
    .withMessage('Provided identifier is not correct')
];
