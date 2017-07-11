<template>
    <section id="banner">
        <div class="inner">
            <div class="logo">
                <img src="/src/images/profile.jpg" alt="wanchaloem laoket">
            </div>
            <h2>ยินดีต้อนรับสู่ devthailand</h2>
            <p class="thaifont">
                รับงานเขียนเว็บไซต์ตามที่ลูกค้าสั่งมา และรับสอนเขียนเว็บไซต์ ในราคาถูกและกันเอง
                <router-link :to="Url.About">ข้อมูลเพิ่มเติม</router-link>
            </p>
        </div>
    </section>
</template>

<script>
import { Url } from '../router';
export default {
    name: 'home',
    data() {
        return {
            Url
        }
    }
}
</script>

<style lang="scss" scoped>
#banner {}
</style>