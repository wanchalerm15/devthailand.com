<template>
    <div id="video">
        <form @submit.prevent="onSubmit()">
            <div class="group">
                {{ error_message }}
            </div>
    
            <div class="group">
                <label>ชื่อรูปภาพ :</label>
                <input type="text" name="video_name" v-model="form.video_name" v-validate="'required'">
                <span class="error">{{ errors.first('video_name') }}</span>
            </div>
    
            <div class="group">
                <label>ลิงค์รูปภาพ :</label>
                <input type="text" name="video_image" v-model="form.video_image">
                <span class="error">{{ errors.first('video_image') }}</span>
            </div>
    
            <div class="group">
                <label>รายละเอียดรูปภาพ :</label>
                <textarea type="text" name="video_detail" v-model="form.video_detail"></textarea>
                <span class="error">{{ errors.first('video_detail') }}</span>
            </div>
    
            <div class="group">
                <label>ประเภท :</label>
                <select name="category_id" v-model="form.category_id" v-validate="'required'">
                    <option value="">เลือกประเภทรูปภาพ</option>
                    <option v-for="item in categories" :key="item" :value="item._id">{{ item.category_name }}</option>
                </select>
                <span class="error">{{ errors.first('category_id') }}</span>
            </div>
    
            <div class="group">
                <button class="button">บันทึกข้อมูล</button>
                <a @click="onClear()">ล้างข้อมูล</a>
            </div>
        </form>
    
        <table>
            <thead>
                <tr>
                    <th>ชื่อรูปภาพ</th>
                    <th>ประเภท</th>
                    <th>ลิงค์รูปภาพ</th>
                    <th>รายละเอียด</th>
                    <th>วันที่</th>
                    <th>จัดการ</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in videos" :key="item" v-if="!item.video_url">
                    <td>{{ item.video_name }}</td>
                    <td>{{ item.category.category_name }}</td>
                    <td>
                        <a :href="item.video_image" target="_blank">เปิดลิงค์</a>
                    </td>
                    <td>{{ item.video_detail || 'ไม่มีข้อมูล' }}</td>
                    <td>{{ item.updated }}</td>
                    <td>
                        <a @click="onShowUpdate(item)">แก้ไข</a>
                        <a @click="onDelete(item)">ลบทิ้ง</a>
                    </td>
                </tr>
            </tbody>
        </table>
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