<template>
    <div id="home">
        <section v-for="item of videos" :key="item">
            <div class="boxs">
                <figure>
                    <a href="">
                        <img :src="item.video_image" :alt="item.video_name">
                    </a>
                </figure>
                <header>
                    <h4>{{ item.video_name }}</h4>
                    <p>{{ item.video_detail || 'ไม่มีรายละเอียด' }}</p>
                </header>
            </div>
        </section>
    </div>
</template>

<script>
import NavbarElement from './navbar.vue';
import http from '../store/http.js';

export default {
    name: 'home',
    created() {
        this.$store.dispatch('videos');
    },
    computed: {
        videos() {
            return this.$store.getters.videos;
        }
    }
}
</script>

<style scoped lang="scss">
#home {
    margin-top: 30px;
}

section {
    float: left;
    width: 25%;
    padding: 0 15px;

    .boxs {
        background-color: white;
        box-shadow: 0 2px 5px rgba(0, 0, 0, .15);
        text-align: center;
        transition: all 0.2s ease-in-out;
        outline: solid 1px white;
        margin-bottom: 30px;
        &:hover {
            outline: solid 1px mediumaquamarine;
        }
    }
    figure {
        height: 160px;
        img {
            width: 100%;
            height: 100%;
            transition: all 0.2s ease-in-out;
        }
        &:hover img {
            transform: scale(1.15);
        }
    }
    header {
        padding: 10px 15px 20px 15px;
        h4,
        p {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        h4 {
            font-weight: 300;
            font-size: 16px;
            letter-spacing: 0;
            color: #808080;
        }
        p {
            font-weight: 200;
            color: #aaaaaa;
        }
    }
}
</style>

