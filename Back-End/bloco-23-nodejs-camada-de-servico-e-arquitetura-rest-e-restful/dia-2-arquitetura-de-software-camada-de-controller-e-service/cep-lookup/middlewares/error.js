module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(400)
      .json({ error: { message: err.details[0].message } });
  };

  // Verificamos se esse é um erro de domínio
  if (err.code) {
    const statusByErrorCode = {
      notFound: 404,
      alreadyExists: 409,
    };

    const status = statusByErrorCode[err.code] || 500;
  
    res.status(status).json(err);
  };

  // Caso não seja um erro de domínio, enviamos uma resposta de erro desconhecido.
  console.error(err);
  return res.status(500).json({ error: { code: 'internal', message: 'Internal server error' } });
};
