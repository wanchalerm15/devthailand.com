<template>
    <div id="app">
        <div id="page-wrapper">
            <HeaderElement></HeaderElement>
            <MenuElement></MenuElement>
            <BannerElement v-if="showBanner"></BannerElement>
            <section id="wrapper">
                <router-view></router-view>
            </section>
            <FooterElement></FooterElement>
        </div>
    </div>
</template>

<script>
import HeaderElement from './Header.vue';
import MenuElement from './Menu.vue';
import BannerElement from './Banner.vue';
import FooterElement from './Footer.vue';
import { Url } from '../router';

export default {
    name: 'app',
    components: {
        HeaderElement,
        MenuElement,
        BannerElement,
        FooterElement
    },
    computed: {
        showBanner() {
            return this.$route.path === Url.Home;
        }
    }
}
</script>

<style lang="scss">

</style>
