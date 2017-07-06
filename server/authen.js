const database = require('./database');

module.exports = (req, res, next) => {
    const authen = req.headers['authorization'];
    const unAuthResponse = (data = null) => {
        res.status(401).send({ message: 'Unauthorization.', error: data });
    }
    if (!authen)
        return unAuthResponse();
    database.userCollection.findById(database.security.crypto.JWTDecrypt(authen) || '0')
        .then(res => {
            req.User = res;
            return next();
        })
        .catch(res => unAuthResponse(res));

};