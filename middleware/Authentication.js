const { sign, verify } = require('jsonwebtoken');
require('dotenv').config();

const createToken = (customer) => {
    return sign (
        { email: customer.email, password: customer.password },
        process.env.SECRET_KEY,
        { expiresIn: '2h' },
    );
};

const verifyToken = (req, res, next) => {
    try {
        // Retrieving the token
    const authHeader = req.headers['authorization'];
    if(!authHeader) {
        return res.status(401).json({
            status: res.statusCode,
            msg: 'Authorization header missing'
        });
    };

    // The token in the format of: Bearer <token>
    const token = authHeader.split(' ')[1];
    if(!token) {
        return res.status(401).json({
            status: res.statusCode,
            msg: 'Token missing'
        });
    };

    // Verify the token
    verify(token, process.env.SECRET_KEY, (error, decoded) => {
        if(error) {
            return res.status(401).json({
                status: res.statusCode,
                msg: 'Invalid token'
            }); 
        }

        // Attach the decoded customer information to a rquest object
        req.customer = decoded;
        next();
    })
    } catch (error) {
        res.status(500).json({
            status: res.statusCode,
            msg: error.message
        });
    }
};

module.exports = { createToken, verifyToken };