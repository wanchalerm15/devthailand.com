<template>
    <header id="header" :class="headerClass">
        <h1>
            <a :href="Url.Home">
                <i class="fa fa-code"></i> devthailand.com
            </a>
        </h1>
        <nav>
            <a href="#menu">เมนูเว็บไซต์</a>
        </nav>
    </header>
</template>

<script>
import { Url } from '../http';

export default {
    name: 'header',
    data() {
        return {
            Url
        }
    },
    computed: {
        headerClass() {
            return Url.Home == this.$route.path ? 'alt' : ''
        }
    }
}
</script>

<style lang="scss" scoped>
.fa-code {
    font-weight: 900;
    font-size: 16px;
}
</style>