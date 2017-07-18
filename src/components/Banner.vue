<template>
    <section id="banner">
        <div class="inner">
            <div class="logo">
                <img :src="configs.welcome_logo" v-if="configs.welcome_logo" alt="wanchaloem laoket">
            </div>
            <h2>{{ configs.welcome_head }}</h2>
            <p class="thaifont">
                {{ configs.welcome_detail }}
                <a :href="Url.About">ข้อมูลเพิ่มเติม</a>
            </p>
        </div>
    </section>
</template>

<script>
import { Url } from '../http';
export default {
    name: 'home',
    data() {
        return {
            Url
        }
    },
    computed: {
        configs() {
            return this.$store.getters.Configs;
        }
    }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1200px) {
    #banner .logo img {
        width: 150px;
        height: 150px;
    }
}
</style>
