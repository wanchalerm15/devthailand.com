<template>
    <header id="header" :class="headerClass">
        <h1>
            <a href="index.html">devthailand.com</a>
        </h1>
        <nav>
            <a href="#menu">Menu</a>
        </nav>
    </header>
</template>

<script>
import { Url } from '../router';

export default {
    name: 'header',
    props: {
        headerClass: {
            type: String,
            default() {
                return Url.Home == this.$route.path ? 'alt' : ''
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>