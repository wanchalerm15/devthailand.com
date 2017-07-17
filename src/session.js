export default {
    devAuthen(token = null) {
        const _key = 'DevAuthen';
        const _storage = storage();
        if (!_storage) return null;
        if (token === false)
            return _storage.removeItem(_key);
        if (token)
            _storage.setItem(_key, token);
        return _storage.getItem(_key);
    }
}

function storage() {
    try {
        if (!localStorage) return;
        return localStorage;
    } catch (e) {
        return null;
    }
}