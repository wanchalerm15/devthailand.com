import Vue from 'vue';

Vue.directive('scroll', {
    bind: function(el, bind, vnode) {
        const element = $(el);
        setTimeout(function() {
            element.niceScroll({
                cursorwidth: '9px',
                cursorcolor: "rgba(0, 0, 0, .15)",
            });
        }, 10);
    }
});