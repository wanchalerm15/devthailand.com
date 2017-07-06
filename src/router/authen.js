import http, { Cookie, Url } from '../store/http';

export default {
    UnAuthenGuard(to, form, next) {
        if (Cookie.authen())
            return next(Url.Home);
        next();
    },

    AuthenGuard(to, form, next) {
        if (!Cookie.authen())
            return next(Url.Login);
        next();
        // http.requestGet(Url.Authen)
        //     .then(res => {
        //         Cookie.authen(res.authen)
        //         next();
        //     })
        //     .catch(res => {
        //         Cookie.authen(false, 0);
        //         next(Url.Login);
        //     });
    }
}
export { Url };