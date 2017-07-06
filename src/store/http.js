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
    let response = error.response;
    if (response.data) {
        if (response.data.errmsg)
            response.data.message = response.data.errmsg;
    }
    throw response;
};

const setRequestOptions = () => {
    let headers = {};
    const authenCookie = Cookie.authen();
    if (authenCookie)
        headers['Authorization'] = authenCookie;
    return { headers };
}

export default {
    requestGet(url) {
        return axios.get(getAddress(url), setRequestOptions())
            .then(res => responseThen(res))
            .catch(err => responseCatch(err));
    },
    requestDelete(url) {
        return axios.delete(getAddress(url), setRequestOptions())
            .then(res => responseThen(res))
            .catch(err => responseCatch(err));
    },
    requestPost(url, model) {
        return axios.post(getAddress(url), model, setRequestOptions())
            .then(res => responseThen(res))
            .catch(err => responseCatch(err));
    },
    requestPut(url, model) {
        return axios.put(getAddress(url), model, setRequestOptions())
            .then(res => responseThen(res))
            .catch(err => responseCatch(err));
    }
}

export { Url, Cookie };