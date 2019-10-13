import { ValidationException } from '.';

const sendValidationException = ({ errors }, res) =>
  res.status(422).json(errors);

export const globalExceptionHandler = (err, req, res, next) => {
  console.log('globalExceptionHandler');

  if (err instanceof ValidationException) {
    return sendValidationException(err, res);
  }

  return res.status(500).send('Server error');
};
