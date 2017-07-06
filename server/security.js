const crypto = require('crypto');
const constants = require('constants');

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
MIGJAoGBAKmIeTCGDqTz9w3XgaOZwJbfdFWa4/LEQsCWI3zSmSMFRx7grLnh718ULjSpl5tO
4I38OL0qekKgXQk6fJTQU3M+SI/VZLX54yoJMNhP7Hio5DXhezTk9kj+tSMDhxj654E3qYpU
ip2C6NMgvu7rvVqbmrGXHlI+EI0jonUd++0ZAgMBAAE=
-----END RSA PUBLIC KEY-----`,
    private: `-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgQCpiHkwhg6k8/cN14GjmcCW33RVmuPyxELAliN80pkjBUce4Ky54e9fFC40
qZebTuCN/Di9KnpCoF0JOnyU0FNzPkiP1WS1+eMqCTDYT+x4qOQ14Xs05PZI/rUjA4cY+ueB
N6mKVIqdgujTIL7u671am5qxlx5SPhCNI6J1HfvtGQIDAQABAoGAED7LniK6dIQMQH9OJOcu
1UZEV4+oGDNGUj4Q2H01v21aC1NsOcO0tF+yrckyhedhDToGFdpkLM5BHAlGttvfoxtT7ll1
1XYnjPR4cEIuxJRR9RxuvpDvFgbPuHTq6+1dLe+TvgwV3Uye0USY5ahP5+ZrOkvKV+fAPnzP
eUB2CIECQQDkhTb1GMzD9nX48U8/r39c/6ZoWHhNgq+U6qhX4oC+1sfZOj4GUsHrjjfebZgP
eerJfJQvIJqKBOmYzZjnaMylAkEAvetkEgWDoFwbmqCGWQBd8KPucCxl27SJ2G+F5To/MZWk
9LSH/dWkDOnbXUwHkLRDiZe5+zSuKR1SIjtW1b9wZQJAKnPxDMFpsPIFYpT5wvwIbi90K6hb
2RJxKfoaAhGrF0jxYZKnWSdgrTEDggfcGuvsSTgik0q8Su20s9VmFX9rnQJBAKeIglozaw2G
swMQH/NbE4M32Roy0BejhwXaOy8e1qgS7dS/fEc6suCBWvVOIE5R9lHl+jXTHt898jooRk1/
9tECQDvt5tlVN6ki9stqeVU++6eIcRoRcFcMx0x9MXI9vMbBflvjd7p2zuPD+jr04TNT+K/K
5ff//PV9z+la29viCJ4=
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

    static JWTEncrypt(plaintText, minutes = 1440) {
        let date = new Date();
        date.setMinutes(date.getMinutes() + minutes);
        return RsaCrypto.Encrypt(`${plaintText}:${Date.parse(date)}`);
    }

    static JWTDecrypt(cipherText) {
        try {
            let plaintText = RsaCrypto.Decrypt(cipherText);
            let texts = plaintText.split(':');
            let time = new Date(parseInt(texts[1]));
            if (time >= new Date())
                return texts[0];
        } catch (e) {
            console.log(e);
        }
        return null;
    }
}

module.exports = {
    hash: createHash,
    validate: validateHash,
    crypto: RsaCrypto
};