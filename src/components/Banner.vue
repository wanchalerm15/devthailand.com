<template>
    <section id="banner">
        <div class="inner">
            <div class="logo">
                <img :src="configs.welcome_logo" v-if="configs.welcome_logo" alt="wanchaloem laoket">
            </div>
            <h2>{{ configs.welcome_head }}</h2>
            <p class="thaifont">
                {{ configs.welcome_detail }}
                <router-link :to="Url.About">ข้อมูลเพิ่มเติม</router-link>
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