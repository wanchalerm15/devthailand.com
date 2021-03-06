import axios from 'axios';
import Url from './Url.json';
import Session from './session';

const address = (url) => {
    return `${Url.Address}/api${url}`;
};

const requestOptions = () => {
    let headers = {};
    headers["content-type"] = 'application/json';
    return { headers };
};

const responseData = (res) => {
    return res;
}

const responseHandle = (res) => {
    let response = res.response;
    throw {
        response: response,
        message: response.data ? response.data.message : response.statusText
    };
};

export default {
    requestGet(url) {
        return axios
            .get(address(url), requestOptions())
            .then(res => responseData(res))
            .catch(res => responseHandle(res));
    },

    requestPost(url, data) {
        return axios
            .post(address(url), data, requestOptions())
            .then(res => responseData(res))
            .catch(res => responseHandle(res));
    },

    requestDelete(url) {
        return axios
            .delete(address(url), requestOptions())
            .then(res => responseData(res))
            .catch(res => responseHandle(res));
    },

    requestPut(url, data) {
        return axios
            .put(address(url), data, requestOptions())
            .then(res => responseData(res))
            .catch(res => responseHandle(res));
    },
}

export { Url, axios, Session };