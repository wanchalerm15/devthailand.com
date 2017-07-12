const Jwt = require('jsonwebtoken');
const Key = 'welcome to the devthailand.com by wanchaloem laokeut love love';
module.exports = {
    encrypt(plainText) {
        return Jwt.sign(plainText, Key);
    },
    decrypt(cipherText) {
        return Jwt.decode(cipherText);
    }
};