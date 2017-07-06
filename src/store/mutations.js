import http, { Url } from './http';

export default {
    countUser(state) {
        http.requestGet(Url.CountUser)
            .then(res => state.countUser = res.count)
            .catch(err => console.log(err))
    },
    categories(state) {
        http.requestGet(Url.Admin.Category)
            .then(res => state.categories = res)
            .catch(err => console.log(err));
    },
    videos(state) {
        http.requestGet(Url.Admin.Video)
            .then(res => state.videos = res)
            .catch(res => console.log(err))
    }
};