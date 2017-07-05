import http, { Url } from './http';

export default {
    countUser(state) {
        http.requestGet(Url.CountUser)
            .then(res => state.countUser = res.count)
            .catch(err => console.log(err))
    }
};