<template>
    <div id="navbar">
        <nav class="wrapper">
            <a href="" class="logo">
                <img src="/images/logo.svg" alt="devthailand logo">
            </a>
            <ul>
                <li>
                    <router-link :to="Url.Home">
                        <i class="fa fa-home"></i> หน้าแรก
                    </router-link>
                </li>
                <li>
                    <router-link :to="Url.About">
                        <i class="fa fa-globe"></i> เกี่ยวกับเรา
                    </router-link>
                </li>
                <li>
                    <router-link :to="Url.Contact">
                        <i class="fa fa-phone"></i> ติดต่อเรา
                    </router-link>
                </li>
                <li>
                    <router-link :to="Url.Login" v-if="!authen">
                        <i class="fa fa-sign-in"></i>
                    </router-link>
                </li>
                <li v-if="authen">
                    <router-link :to="Url.Admin.Home" class="active">
                        <i class="fa fa-lock"></i>
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import { Url, Cookie } from '../store/http.js';

export default {
    name: "navbar",
    data() {
        return {
            Url,
            authen: Cookie.authen()
        }
    },
    watch: {
        $route(to, from) {
            this.authen = Cookie.authen();
        }
    },
    methods: {
        onLogout() {
            Cookie.authen(false, 0);
            this.$router.push(Url.Login);
        }
    }
}
</script>

<style lang="scss" scoped>
$navbarHeight: 80px;
#navbar {
    background-color: white;
    height: $navbarHeight;
    box-shadow: 0 2px 3px rgba(0, 0, 0, .05);
    border-bottom: solid 1px white;
    font-size: 15px;
}

ul {
    float: right;
    list-style: none;
    >li {
        float: left;
        >a {
            display: block;
            color: teal;
            text-decoration: none;
            height: $navbarHeight;
            line-height: $navbarHeight;
            padding: 0 25px;
            font-weight: 300;
            transition: all 0.1s ease-in-out;
            cursor: pointer;

            &:hover,
            &:focus,
            &.router-link-exact-active,
            &.router-link-active.active {
                background-color: mediumaquamarine;
                color: white;
            }
            &.router-link-exact-active,
            &.router-link-active.active {
                font-weight: 400;
            }
        }
    }
}

.logo {
    display: block;
    float: left;
    height: $navbarHeight;
    padding: 15px;
    img {
        height: 100%;
    }
}
</style>
