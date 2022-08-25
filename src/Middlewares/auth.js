const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const validateAuth = (req, res, next) => {
    const { authorization: token } = req.headers;
    
    if (!token) return res.status(401).json({ message: 'Token not found' });

    // Referencia https://www.luiztools.com.br/post/autenticacao-json-web-token-jwt-em-nodejs/
    jwt.verify(token, JWT_SECRET, (err) => {
        if (err) { 
            return res.status(401).json({ message: 'Expired or invalid token' });
        }
        next();
    });
};

module.exports = validateAuth;