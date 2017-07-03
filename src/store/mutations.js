import http from './http';

export default {
    countUser(state) {
        http.requestGet('countUser')
            .then(res => state.countUser = res.data.count)
            .catch(err => console.log(err))
    }
};