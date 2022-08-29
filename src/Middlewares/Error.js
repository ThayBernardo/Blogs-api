const Error = {
  err: ((err, _req, res, _next) => {
    if (typeof err.code !== 'number') {
      console.error(err);
      return res.status(500).json({ message: 'Erro no code' });
    }
    return res.status(err.code || 500).json({ message: err.message });
  }),
};
  
module.exports = Error;