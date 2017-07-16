import Vue from 'vue';
import VeeValidate from 'vee-validate';
import http, { Url } from './http';

Vue.use(VeeValidate);

Vue.mixin({
    methods: {
        setError: setError,
        configSubmit(event) {
            const element = event.currentTarget;
            const id = this.form._id;
            const model = {};
            model[element.id] = element.value;
            http.requestPost(Url.Admin.Address, { model, id })
                .catch((err => this.setError(err.message)));
        }
    }
});


export function setError(error_message) {
    // default error validate
    if (error_message === 'validate') {
        const errors = this.errors.all();
        error_message = (errors.length >= 0) ? errors[0] : 'Some ploblem error.';
    }

    setTimeout(() => {
        try {
            const errorElement = $('#error');
            if (errorElement.length == 0) return;
            clearTimeout(window.setErrorTimeout);
            if (error_message != null) {
                errorElement.html(error_message);
                errorElement.fadeIn();
            }
            window.setErrorTimeout = setTimeout(() => {
                errorElement.fadeOut();
            }, 3000);
        }
        // catch error function  
        catch (e) {
            console.log('setError function error : ', e);
        }
    }, 0);
}