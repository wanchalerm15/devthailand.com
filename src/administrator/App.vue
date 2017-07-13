<template>
    <div id="app-admin">
        <NavbarAdmin></NavbarAdmin>
        <div class="admin-wrapper" style="margin-top: 15px;">
            <ActivityAdmin v-if="type ==  'activity'"></ActivityAdmin>
        </div>
    </div>
</template>

<script>
import NavbarAdmin from './Navbar.vue';
import ActivityAdmin from './Activity.vue';

export default {
    name: 'app-admin',
    components: {
        NavbarAdmin,
        ActivityAdmin
    },
    computed: {
        type() {
            return this.$route.meta.type;
        }
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
    * {
        color: #505050;
    }

    .input {
        border: solid 1px #a0a0a0;
        height: 40px;
        border-radius: 3px;
        padding: 0 10px;
        font-size: 16px;
        color: #505050;
    }

    textarea.input {
        height: auto;
    }

    .error {
        color: white;
        font-size: 14px;
    }
}

.admin-wrapper {
    width: 1200px;
    margin: auto;
}

.admin-panel {
    background-color: white;
    padding: 15px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, .1);
    border-radius: 3px;
}

.admin-row {
    margin-left: -15px;
    margin-right: -15px;
    .admin-columns {
        padding-left: 15px;
        padding-right: 15px;
        float: left;
    }
}
</style>


