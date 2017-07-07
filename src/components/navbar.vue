<template>
    <div id="navbar">
        <nav class="wrapper">
            <ul class="right">
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
            </ul>
        </nav>
    </div>
</template>

<script>
import { Url } from '../store/http.js';

export default {
    name: "navbar",
    data() {
        return {
            Url
        }
    }
}
</script>

<style lang="scss" scoped>
$navHeight: 50px;
#navbar {
    height: $navHeight;
    width: 100%;
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
        }
        &:first-child>a {
            padding-left: 0;
        }
    }
}
</style>
