<template>
    <section id="banner">
        <div class="inner">
            <div class="logo">
                <img :src="configs.welcome_logo" v-if="configs.welcome_logo" alt="wanchaloem laoket">
            </div>
            <h2>{{ configs.welcome_head }}</h2>
            <p v-html="configs.welcome_detail"></p>
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
#banner {
    .inner h1 {
        font-family: "Raleway", "Prompt", Helvetica, sans-serif;
    }
}

@media screen and (min-width: 1200px) {
    #banner .logo img {
        width: 150px;
        height: 150px;
        margin-bottom: 25px;
    }
}
</style>
