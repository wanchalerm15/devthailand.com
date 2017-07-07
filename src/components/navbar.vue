<template>
    <div id="navbar">
        <nav class="wrapper">
            <ul class="left">
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
                <li v-if="authen">
                    <router-link :to="Url.Admin.Home">
                        <i class="fa fa-lock"></i> เข้าไปจัดการวิดีโอ
                    </router-link>
                </li>
            </ul>
    
            <ul class="right">
                <li>
                    <router-link :to="Url.Login" v-if="!authen">
                        <i class="fa fa-sign-in"></i> เข้าสู่ระบบ
                    </router-link>
                    <a v-if="authen" @click="onLogout()">
                        ออกจากระบบ
                        <i class="fa fa-sign-out"></i>
                    </a>
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
$navHeight: 50px;
#navbar {
    height: $navHeight;
    width: 100%;
    position: fixed;
    background-color: white;
    left: 0;
    top: 0;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .05);
}

ul {
    list-style: none;

    >li {
        float: left;
        >a {
            height: $navHeight;
            line-height: $navHeight;
            display: block;
            padding: 0 20px;
            text-decoration: none;
            font-weight: 300;
            font-size: 14px;
            color: #606060;
            &:hover {
                color: lightseagreen;
            }
        }
        &:first-child>a {
            padding-left: 0;
        }
        &:last-child>a {
            padding-right: 0;
        }
    }

    &.left {
        float: left;
    }

    &.right {
        float: right;
    }
}
</style>
