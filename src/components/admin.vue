<template>
    <div id="admin">
        <nav>
            <ul>
                <li>
                    <router-link :to="Url.Home">หน้าแรก</router-link>
                </li>
                <li>
                    <router-link :to="Url.Admin.Category">ประเภท</router-link>
                </li>
                <li>
                    <router-link :to="Url.Admin.Video">วิดีโอ</router-link>
                </li>
                <li>
                    <router-link :to="Url.Admin.Image">รูปภาพ</router-link>
                </li>
                <li>
                    <router-link :to="Url.Admin.VideoActive">เลือกวิดีโอหลัก</router-link>
                </li>
                <li>
                    <a @click="onLogout()">ออกจากระบบ</a>
                </li>
            </ul>
        </nav>
        <CategoryElement v-if="type === 'category'"></CategoryElement>
        <VideoElement v-if="type === 'video'"></VideoElement>
        <ImageElement v-if="type === 'image'"></ImageElement>
        <VideoActiveElement v-if="type === 'video-active'"></VideoActiveElement>
    </div>
</template>

<script>
import CategoryElement from './category.vue';
import VideoElement from './video.vue';
import VideoActiveElement from './video-active.vue';
import ImageElement from './image.vue';
import { Cookie, Url } from '../store/http.js';

export default {
    name: 'admin',
    props: {
        type: String
    },
    data() {
        return {
            Url
        };
    },
    created() {
    },
    components: {
        CategoryElement,
        VideoElement,
        VideoActiveElement,
        ImageElement
    },
    methods: {
        onLogout() {
            Cookie.authen(false, 0);
            this.$router.push(Url.Login);
        }
    }
}
</script>

