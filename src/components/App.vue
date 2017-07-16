<template>
    <div id="app">
        <!-- Frontend -->
        <div id="page-wrapper" v-if="!isAuthenticated">
            <HeaderElement></HeaderElement>
            <MenuElement></MenuElement>
            <BannerElement v-if="showBanner"></BannerElement>
            <section id="wrapper" v-if="isLoaded">
                <router-view></router-view>
            </section>
            <FooterElement></FooterElement>
        </div>
        <!-- Backend -->
        <div id="page-wrapper-admin" v-if="isAuthenticated">
            <router-view></router-view>
        </div>
        <!-- Notification -->
        <div id="error">error please try again มีบางอย่างผิดพลาดเกิดขึ้น</div>
    </div>
</template>

<script>
import HeaderElement from './Header.vue';
import MenuElement from './Menu.vue';
import BannerElement from './Banner.vue';
import FooterElement from './Footer.vue';
import { Url } from '../http';

export default {
    name: 'app',
    data() {
        return {
            isLoaded: false
        }
    },
    components: {
        HeaderElement,
        MenuElement,
        BannerElement,
        FooterElement
    },
    created() {
        this.$store.dispatch('Configs')
            .then(() => this.isLoaded = true);
    },
    computed: {
        showBanner() {
            return this.$route.path === Url.Home;
        },
        isAuthenticated() {
            const searchIndex = this.$route.fullPath.indexOf(Url.Admin.Home);
            return searchIndex >= 0;
        }
    }
}
</script>

<style lang="scss">
#app {
    .thaifont {
        font-family: Prompt;
    }
    .group {
        position: relative;
        margin-bottom: 15px;
        .error {
            display: none;
            background-color: brown;
            padding: 5px;
            position: absolute;
            width: 100%;
            z-index: 100;
            left: 0;
            top: auto;
            text-align: center;
            border-radius: 5px;
            margin-top: 2px;
        }
        [aria-invalid="true"]:focus+.error {
            display: block;
        }
    }
    .group-btn {
        margin-top: 30px;
    }
}

#error {
    display: none;
    background-color: brown;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 15px;
    text-align: center;
    text-transform: capitalize;
    font-weight: bold;
}
</style>
