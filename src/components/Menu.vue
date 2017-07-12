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
                <li>
                    <a :href="Url.Login">
                        เข้าสู่ระบบ
                    </a>
                </li>
            </ul>
            <a href="#" class="close">Close</a>
        </div>
    </nav>
</template>

<script>
import { Url } from '../http';

export default {
    name: 'menu',
    data() {
        return {
            Url
        }
    }
}
</script>

<style lang="scss" scoped>

</style>