<template>
    <div id="app-admin">
        <NavbarAdmin></NavbarAdmin>
        <div class="admin-wrapper">
            <HomeAdmin v-if="type == 'home'"></HomeAdmin>
            <ActivityAdmin v-if="type ==  'activity'"></ActivityAdmin>
            <ContactAdmin v-if="type == 'contact'"></ContactAdmin>
        </div>
    </div>
</template>

<script>
import { Session, Url } from '../http';
import NavbarAdmin from './Navbar.vue';
import ActivityAdmin from './Activity.vue';
import ContactAdmin from './Contact.vue';
import HomeAdmin from './Home.vue';

export default {
    name: 'app-admin',
    components: {
        NavbarAdmin,
        ActivityAdmin,
        ContactAdmin,
        HomeAdmin
    },
    computed: {
        type() {
            return this.$route.meta.type;
        }
    },
    mounted() {
        if (!Session.devAuthen())
            this.$router.push(Url.Login);
    },
}
</script>

<style lang="scss">
$mainColor: lightseagreen;
$mainPadding: 10px;

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
        max-width: 100%;
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

    .header {
        background-color: $mainColor;
        padding: 5px 15px;
        *,
        & {
            color: white;
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
    margin-left: -$mainPadding;
    margin-right: -$mainPadding;
    .admin-columns {
        padding-left: $mainPadding;
        padding-right: $mainPadding;
        float: left;
    }
    &:after {
        content: '';
        display: block;
        clear: left;
    }
}
</style>


