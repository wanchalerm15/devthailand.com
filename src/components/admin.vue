<template>
    <div id="admin">
        <nav>
            <ul>
                <li>
                    <a @click="types = 1">ประเภท</a>
                </li>
                <li>
                    <a @click="types = 2">วิดีโอ</a>
                </li>
                <li>
                    <a @click="onLogout()">ออกจากระบบ</a>
                </li>
            </ul>
        </nav>
        <Category v-if="types === 1"></Category>
    </div>
</template>

<script>
import Category from './category.vue';
import { Cookie, Url } from '../store/http.js';

export default {
    name: 'admin',
    data() {
        return {
            types: 1
        }
    },
    components: {
        Category
    },
    methods: {
        onLogout() {
            Cookie.authen(false, 0);
            this.$router.push(Url.Login);
        }
    }
}
</script>

