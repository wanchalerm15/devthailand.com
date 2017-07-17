<template>
    <nav id="menu">
        <div class="inner">
            <h2>เมนูเว็บไซต์</h2>
            <ul class="links">
                <li>
                    <a :href="Url.Home">
                        หน้าหลัก
                    </a>
                </li>
                <li>
                    <a :href="Url.About">
                        เกี่ยวกับฉัน
                    </a>
                </li>
                <li v-if="!isAuthentication">
                    <a :href="Url.Login">
                        เข้าสู่ระบบ
                    </a>
                </li>
                <li v-if="isAuthentication">
                    <a :href="Url.Admin.Home">
                        ผู้ดูแลระบบ
                    </a>
                </li>
            </ul>
            <a href="#" class="close">Close</a>
        </div>
    </nav>
</template>

<script>
import { Url, Session } from '../http';

export default {
    name: 'menu',
    data() {
        return {
            Url,
            isAuthentication: null
        }
    },
    mounted() {
        this.isAuthentication = Session.devAuthen();
    }
}
</script>

<style lang="scss" scoped>

</style>