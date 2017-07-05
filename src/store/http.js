import axios from 'axios';
import Url from '../url.json';
import Cookie from './cookie';

const getAddress = (url) => {
    return `http://localhost:9000/api${url}`;
}

const responseThen = (response) => {
    return response.data;
};
const responseCatch = (error) => {
    throw error.response;
};

export default {
    requestGet(url) {
        return axios.get(getAddress(url))
            .then(res => responseThen(res))
            .catch(err => responseCatch(err));
    },
    requestDelete(url) {
        return axios.delete(getAddress(url))
            .then(res => responseThen(res))
            .catch(err => responseCatch(err));
    },
    requestPost(url, model) {
        return axios.post(getAddress(url), model)
            .then(res => responseThen(res))
            .catch(err => responseCatch(err));
    }
}

export { Url, Cookie };