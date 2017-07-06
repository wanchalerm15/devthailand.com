<template>
    <div id="main-video">
        <h3>เลือกวิดีโอหลัก </h3>
        <div class="group">
            {{ error_message }}
        </div>
        <label v-for="item in videos" :key="item">
            <input type="checkbox" @change="onCheckBox(item._id, $event)" :checked="item.video_active"> {{ item.video_name }}
        </label>
    </div>
</template>

<script>
import http, { Url } from '../store/http.js';

export default {
    name: 'main-video',
    data() {
        return {
            error_message: null
        }
    },
    created() {
        this.$store.dispatch('videos');
    },
    computed: {
        videos() {
            return this.$store.getters.videos;
        }
    },
    methods: {
        onCheckBox(id, event) {
            http.requestPut(`${Url.Admin.VideoActive}/${id}`, { video_active: event.target.checked })
                .then(res => console.log(res))
                .catch(res => this.error_message = res.data.message);
        }
    }
}
</script>