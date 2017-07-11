import axios from 'axios';
import Url from './Url.json';

const address = (url) => {
    return `${Url.Address}/${url}`;
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
    throw response;
};

export default {
    requestGet(url) {
        return axios
            .get(address(url), requestOptions())
            .then(res => responseData(res))
            .catch(res => responseHandle(res));
    },

    requistPost(url, data) {
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