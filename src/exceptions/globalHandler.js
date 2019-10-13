export const globalExceptionHandler = (err, req, res, next) => {
  return res.status(500).send('Server error');
};
