<template>
    <div id="app-admin">
        <NavbarAdmin></NavbarAdmin>
        <div class="admin-wrapper">
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
$mainColor: lightseagreen;

#app-admin {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #f2f2f2;
    overflow: auto;
    font-size: 16px;
    padding-bottom: 68px;
    padding-top: 75px;
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

    .special {
        height: 40px;
        line-height: 40px;
        &,
        * {
            color: white;
        }
        background-color: $mainColor;
        &.default {
            background-color: dimgray;
        }
    }

    form {
        margin: 0;
    }

    .link {
        color: $mainColor !important;
        text-decoration: underline;
        cursor: pointer;
        &:hover {
            color: #cc0000 !important;
        }
    }

    .table {
        td,
        th {
            padding: 5px 15px;
            border-bottom: solid 1px #e0e0e0;
        }
        thead th {
            background-color: $mainColor;
            color: white;
            .fa {
                color: white;
            }
        }
    }
}

.admin-wrapper {
    width: 1200px;
    margin: auto;
}

.admin-panel {
    background-color: white;
    padding: 15px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, .07);
    border-radius: 2px;
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


