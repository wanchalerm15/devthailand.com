import axios from 'axios';

const getAddress = (url) => {
    return `http://localhost:9000/api/${url}`;
}
const responseCatch = (error) => { throw error.response; };

export default {
    requestGet(url) {
        return axios.get(getAddress(url)).catch(err => responseCatch(err));
    },
    requestPost(url, model) {
        return axios.post(getAddress(url), model).catch(err => responseCatch(err));
    }
}