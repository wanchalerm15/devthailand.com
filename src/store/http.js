import axios from 'axios';

const getAddress = (url) => {
    return `http://localhost:9000/api/${url}`;
}

export default {
    requestGet(url) {
        return axios.get(getAddress(url));
    },
    requestPost(url, model) {
        return axios.post(getAddress(url), model);
    }
}