<template>
    <div id="navbar">
        <div class="box">
            <h1>
                www.
                <span>dev</span>thailand.
                <span>com</span>
            </h1>
            <h4>รับทำเว็บ Application ไม่ว่าจะเป็นเว็บขายสินค้าเว็บบริษัท องค์กร เว็บโรงเรียน เว็บราชการต่างๆ </h4>
        </div>
        <aside>
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
        </aside>
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
#navbar {
    color: white;
    position: fixed;
    top: 0;
    left: 200px;
    height: 100%;
    padding-top: 50px;
}

aside {
    width: 300px;
    border: solid 1px red;
    text-align: center;
}

.box {
    padding: 15px;
    background-color: #292826;
    margin-bottom: 30px;
    span {
        color: #cfb17b;
    }
}

ul {
    list-style: none;
    a {
        text-decoration: none;
        color: white;
    }
}
</style>
