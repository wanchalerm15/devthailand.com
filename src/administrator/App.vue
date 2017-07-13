<template>
    <div id="app-admin">
        <NavbarAdmin></NavbarAdmin>
    </div>
</template>

<script>
import NavbarAdmin from './Navbar.vue';
export default {
    name: 'app-admin',
    components: {
        NavbarAdmin
    }
}
</script>

<style lang="scss">
#app-admin {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #f4f4f4;
    overflow: auto;
}

.admin-wrapper {
    width: 1200px;
    margin: auto;
}
</style>


