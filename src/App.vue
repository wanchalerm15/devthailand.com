<template>
    <div id="app">
        <NavbarElement></NavbarElement>
        <div class="wrapper">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import NavbarElement from './components/navbar.vue';

export default {
    name: 'app',
    components: {
        NavbarElement
    }
}
</script>

