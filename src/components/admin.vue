<template>
    <div id="admin">
        <nav class="box">
            <ul>
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
                    <a @click="onLogout()">
                        <i class="fa fa-sign-out"></i>
                    </a>
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

<style lang="scss" scoped>
$mainColor: cadetblue;
nav {
    box-shadow: none;
    margin-top: 15px;
    margin-bottom: 30px;
    ul {
        list-style: none;
        >li {
            float: left;
            >a {
                display: block;
                text-decoration: none;
                color: black;
                font-weight: 400;
                border-right: solid 1px rgba(0, 0, 0, .05);
                min-width: 100px;
                text-align: center;
                cursor: pointer;
                &.router-link-exact-active {
                    background-color: $mainColor;
                    color: white;
                }
            }
        }
        &:after {
            content: '';
            clear: both;
            display: block;
        }
    }
}
</style>


