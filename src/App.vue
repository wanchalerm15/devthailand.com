<template>
    <div id="app">
        <NavbarElement></NavbarElement>
        <router-view></router-view>
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

