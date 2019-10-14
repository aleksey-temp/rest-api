import { ValidationException, NotFoundException } from '.';

const sendValidationException = ({ errors }, res) =>
  res.status(422).json(errors);

const sendNotFoundException = res =>
  res.status(404).json({ message: 'Resource with provided ID does not exist' });

export const globalExceptionHandler = (err, req, res, next) => {
  if (err instanceof ValidationException) {
    return sendValidationException(err, res);
  }

  if (err instanceof NotFoundException) {
    return sendNotFoundException(res);
  }

  return res.status(500).send({
    stack: err.stack,
    message: err.message
  });
};
