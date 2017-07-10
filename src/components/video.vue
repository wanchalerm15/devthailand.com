<template>
    <div id="video">
        <div class="row">
            <div class="columns">
                <div class="box">
                    <form @submit.prevent="onSubmit()">
                        <div class="group">
                            {{ error_message }}
                        </div>
    
                        <div class="group">
                            <label>ชื่อวิดีโอ :</label>
                            <input type="text" class="input" name="video_name" v-model="form.video_name" v-validate="'required'">
                            <span class="error">{{ errors.first('video_name') }}</span>
                        </div>
    
                        <div class="group">
                            <label>ลิงค์วิดีโอ :</label>
                            <input type="text" class="input" name="video_url" v-model="form.video_url" v-validate="'required|url'">
                            <span class="error">{{ errors.first('video_url') }}</span>
                        </div>
    
                        <div class="group">
                            <label>ลิงค์รูปภาพวิดีโอ :</label>
                            <input type="text" class="input" name="video_image" v-model="form.video_image">
                            <span class="error">{{ errors.first('video_image') }}</span>
                        </div>
    
                        <div class="group">
                            <label>รายละเอียดวิดีโอ :</label>
                            <textarea class="input" rows="5" name="video_detail" v-model="form.video_detail"></textarea>
                            <span class="error">{{ errors.first('video_detail') }}</span>
                        </div>
    
                        <div class="group">
                            <label>ประเภท :</label>
                            <select class="input" name="category_id" v-model="form.category_id" v-validate="'required'">
                                <option value="">เลือกประเภทวิดีโอ</option>
                                <option v-for="item in categories" :key="item" :value="item._id">{{ item.category_name }}</option>
                            </select>
                            <span class="error">{{ errors.first('category_id') }}</span>
                        </div>
    
                        <div class="group">
                            <button type="submit" class="button">บันทึกข้อมูล</button>
                            <button type="button" class="button" @click="onClear()">ล้างข้อมูล</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="columns">
                <div class="box">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>ชื่อวิดีโอ</th>
                                <th>วิดีโอ</th>
                                <th>รูปภาพ</th>
                                <th>วันที่</th>
                                <th>จัดการ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in videos" :key="item" v-if="item.video_url">
                                <td>
                                    <div class="text-overflow">{{ item.video_name }}</div>
                                </td>
                                <td>
                                    <a :href="item.video_url" target="_blank">เปิดลิงค์</a>
                                </td>
                                <td>
                                    <a :href="item.video_image" target="_blank">เปิดลิงค์</a>
                                </td>
                                <td>{{ item.updated }}</td>
                                <td>
                                    <button class="button sm" @click="onShowUpdate(item)">แก้ไข</button>
                                    <button class="button sm" @click="onDelete(item)">ลบทิ้ง</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import http, { Url } from '../store/http.js';

export default {
    name: "video",
    data() {
        return {
            form: {
                _id: null,
                video_name: null,
                video_url: null,
                video_image: null,
                video_detail: null,
                category_id: ''
            },
            error_message: null
        }
    },
    created() {
        this.$store.dispatch('videos');
        this.$store.dispatch('categories');
    },
    computed: {
        videos() {
            return this.$store.getters.videos;
        },
        categories() {
            return this.$store.getters.categories;
        }
    },
    methods: {
        onSubmit() {
            this.$validator.validateAll().then(valid => {
                if (!valid) return;
                // Update
                if (this.form._id) {
                    http.requestPut(`${Url.Admin.Video}/${this.form._id}`, this.form)
                        .then(res => responseThen(res))
                        .catch(res => this.error_message = res.data.message);
                }
                // Delete
                else {
                    http.requestPost(Url.Admin.Video, this.form)
                        .then(res => responseThen(res))
                        .catch(res => this.error_message = res.data.message);
                }
            });
            // response then promise
            const responseThen = res => {
                this.onClear();
                this.$store.dispatch('videos');
            };
        },
        onClear() {
            this.form = {};
            this.form.category_id = '';
            this.$validator.clean();
        },
        onDelete(item) {
            if (!confirm('ต้องการลบข้อมูลนี้จริงหรือ?')) return;
            http.requestDelete(`${Url.Admin.Video}/${item._id}`)
                .then(res => {
                    this.$store.dispatch('videos');
                })
                .catch(res => this.error_message = res.data.message);
        },
        onShowUpdate(item) {
            this.form = Object.assign({}, item);
        }
    }
}
</script>

<style lang="scss" scoped>
.text-overflow {
    width: 250px;
}

.row {
    margin-left: -15px;
    margin-right: -15px;
}

.columns {
    float: left;
    padding-left: 15px;
    padding-right: 15px;
    &:first-child {
        width: 25%;
    }
    &:last-child {
        width: 75%;
    }
}
</style>


