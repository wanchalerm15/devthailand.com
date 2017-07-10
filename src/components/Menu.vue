<template>
    <nav id="menu">
        <div class="inner">
            <h2>Menu</h2>
            <ul class="links">
                <li>
                    <a :href="Url.Home">Home</a>
                </li>
                <li>
                    <a :href="Url.About">About</a>
                </li>
                <li>
                    <a href="#">Log In</a>
                </li>
                <li>
                    <a href="#">Sign Up</a>
                </li>
            </ul>
            <a href="#" class="close">Close</a>
        </div>
    </nav>
</template>

<script>
import { Url } from '../router';

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