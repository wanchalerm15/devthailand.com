import Vue from 'vue';
import VeeValidate from 'vee-validate';
Vue.mixin({
    methods: {
        setError(error_message) {
            // default error validate
            if (error_message === 'validate') {
                const errors = this.errors.all();
                error_message = (errors.length >= 0) ? errors[0] : 'Some ploblem error.';
            }
            setTimeout(() => {
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
            }, 0);
        }
    }
});
Vue.use(VeeValidate);