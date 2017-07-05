const crypto = require('crypto');

var SaltLength = 50;

function createHash(password) {
    var salt = generateSalt(SaltLength);
    var hash = md5(password + salt);
    return salt + hash;
}

function validateHash(hash, password) {
    var salt = hash.substr(0, SaltLength);
    var validHash = salt + md5(password + salt);
    return hash === validHash;
}

function generateSalt(len) {
    var set = '0123456789abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ',
        setLen = set.length,
        salt = '';
    for (var i = 0; i < len; i++) {
        var p = Math.floor(Math.random() * setLen);
        salt += set[p];
    }
    return salt;
}

function md5(string) {
    return crypto.createHash('md5').update(string).digest('hex');
}

const keypair = {
    public: `-----BEGIN RSA PUBLIC KEY-----
MEgCQQDIaGSjTWP5geRp8A61qpHsACIzPpZVRbmmOCHx2a4W3z32H0mvFo4qG2IbfLRypGAP
pPR7If2GfbBJfx33/KRNAgMBAAE=
-----END RSA PUBLIC KEY-----`,
    private: `-----BEGIN RSA PRIVATE KEY-----
MIIBOwIBAAJBAMhoZKNNY/mB5GnwDrWqkewAIjM+llVFuaY4IfHZrhbfPfYfSa8WjiobYht8
tHKkYA+k9Hsh/YZ9sEl/Hff8pE0CAwEAAQJAcTqqQankJoDBMSm05edtcs3QhOuDvMIcVlG4
vBClT73qFZaZptU9/xwUikjzhDmdx++SQF2YsNLyk45uFA8LcQIhAOiYP7HY8Em0cgJ+q2P6
B+05KkYFlDndEBRulbDlq3rbAiEA3JL+UqJqQ8QMaFXKOOayZIB9w4FAtfvQbGHcKwrewfcC
IDHlb0yMuEdncUm9uLCy0359U+c/jSO4m5l2e6A+NMIfAiEAtrUT8UMTntpwJKSbg5Kkxlcg
1ablAVl7BavyAb1ZU3UCIQCPNPp9w/71SbJSOqde+QWu0B8yxCeRMu8AUv/Kc2aL/Q==
-----END RSA PRIVATE KEY-----`
};

class RsaCrypto {
    static encode() {
        return 'base64';
    }

    static Decrypt(cipherText) {
        try {
            return crypto.privateDecrypt(keypair.private, new Buffer(cipherText, RsaCrypto.encode())).toString('utf8');
        } catch (e) {
            console.log('RsaCrypto Decrypt : ', e);
            return null;
        }
    }

    static Encrypt(plaintText) {
        try {
            return crypto.publicEncrypt(keypair.public, new Buffer(plaintText)).toString(RsaCrypto.encode());
        } catch (e) {
            console.log('RsaCrypto Encrypt : ', e);
            return null;
        }
    }
}

module.exports = {
    hash: createHash,
    validate: validateHash,
    crypto: RsaCrypto
};