<template>
    <div id="home">
        <div class="top">
            <h1>
                <span>dev</span>thailand.com
            </h1>
            <section>
                <header>
                    <h2>รับเขียนเว็บไซต์, เว็บขายสินค้า, เว็บระบบต่างๆ, เว็บโรงเรียน, เว็บข้าราชการ, เว็บโชว์ผลงาน, เว็บโปรเจคนักศึกษา และรับสอนเขียนเว็บไซต์ในราคากันเอง</h2>
                    <p class="my-social">
                        <a href="" class="fa fa-facebook"></a>
                        <a href="" class="fa fa-google-plus"></a>
                        <a href="" class="fa fa-twitter"></a>
                        <a href="" class="fa fa-instagram"></a>
                    </p>
                </header>
            </section>
        </div>
    
        <div class="row" id="media-gallary">
            <section v-for="item of videos" :key="item" class="columns" :data-poster="item.video_url ? item.video_image : ''" :data-sub-html="'<h5 style=\'font-weight:400;\'>'+ item.video_name +'</h5><p style=\'font-weight:200;\'>'+ (item.video_detail || 'ไม่มีคำอธิบาย') +'</p>'" :data-src="item.video_url || item.video_image">
                <div class="boxs">
                    <figure>
                        <a href="#">
                            <img :src="item.video_image" :alt="item.video_name">
                        </a>
                        <span class="img-detail">
                            {{ item.video_url ? 'วิดีโอ' : 'รูปภาพ' }}
                        </span>
                    </figure>
                    <header>
                        <h4>{{ item.video_name }}</h4>
                        <p>{{ item.video_detail || 'ไม่มีรายละเอียด' }}</p>
                    </header>
                </div>
            </section>
        </div>
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
    updated() {
        // media gallary
        lightGallery(document.getElementById('media-gallary'));
    },
    computed: {
        videos() {
            return this.$store.getters.videos;
        }
    }
}
</script>

<style scoped lang="scss">
$mainColor: mediumaquamarine;
.row {
    margin-left: -15px;
    margin-right: -15px;
}

.top {
    text-align: center;
    background-color: $mainColor;
    margin-bottom: 30px;
    margin-top: 30px;
    color: white;
    padding: 50px 0 65px 0;
    border: solid 1px white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .15);
    h1 {
        font-weight: 300;
        text-transform: uppercase;
        letter-spacing: 10px;
        font-size: 40px;
        margin-bottom: 5px;
    }

    h2 {
        letter-spacing: 1px;
        margin-bottom: 30px;
        font-weight: 300;
        font-size: 16px;
        padding: 0 18%;
        line-height: 1.8em;
    }
}

.my-social {
    a {
        color: white;
        text-decoration: none;
        border: solid 1px white;
        height: 35px;
        width: 35px;
        line-height: 35px;
        text-align: center;
        border-radius: 10px;
        font-size: 16px;
        margin: 0 2px;
        transition: all 0.2s ease-in-out;
        &:hover {
            background-color: white;
            color: $mainColor;
        }
    }
}

.columns {
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
        position: relative;
        transition: all 0.2s ease-in-out;
        &:hover {
            transform: scale(1.15);
        }
        img {
            width: 100%;
            height: 100%;
        }
        span {
            position: absolute;
            top: 5px;
            right: 5px;
            padding: 1px 7px;
            font-size: 12px;
            color: olive;
            background-color: white;
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

