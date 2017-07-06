<template>
    <div id="category">
        <form @submit.prevent="onCategoryPost()">
            <div class="group">
                {{ error_message }}
            </div>
    
            <div class="group">
                <label>ชื่อประเภท :</label>
                <input type="text" name="category_name" v-validate="'required'" v-model="category.category_name">
                <span class="error">{{ errors.first('category_name') }}</span>
            </div>
    
            <div class="group">
                <label>รายละเอียด :</label>
                <textarea type="text" v-model="category.category_detail"></textarea>
            </div>
    
            <div class="group">
                <button class="button" type="submit">บันทึกข้อมูล</button>
                <a class="button" type="button" @click="onCategoryClear()">ล้างข้อมูล</a>
            </div>
        </form>
    
        <table>
            <thead>
                <tr>
                    <th>ชื่อประเภท</th>
                    <th>รายละเอียด</th>
                    <th>วันที่</th>
                    <th>จัดการ</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in categories" :key="item">
                    <td>{{ item.category_name }}</td>
                    <td>{{ item.category_detail || 'ไม่มีข้อมูล' }}</td>
                    <td>{{ item.updated }}</td>
                    <td>
                        <a @click="onGetUpdateModel(item)">แก้ไข</a>
                        <a @click="onCategoryDelete(item)">ลบทิ้ง</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>



<script>
import http, { Url } from '../store/http.js';
export default {
    name: 'category',
    data() {
        return {
            category: {
                _id: null,
                category_name: null,
                category_detail: null
            },
            error_message: null
        }
    },

    created() {
        this.$store.dispatch('categories');
    },

    computed: {
        categories() {
            return this.$store.getters.categories;
        }
    },

    methods: {
        onCategoryPost() {
            this.$validator.validateAll().then(valid => {
                if (!valid) return;
                // Update
                if (this.category._id) {
                    http.requestPut(`${Url.Admin.Category}/${this.category._id}`, this.category)
                        .then(res => responseThen(res))
                        .catch(res => this.error_message = res.data.message);
                }
                // Create
                else {
                    http.requestPost(Url.Admin.Category, this.category)
                        .then(res => responseThen(res))
                        .catch(res => this.error_message = res.data.message);
                }
            });
            // for response data update and create
            const responseThen = response => {
                this.onCategoryClear();
                this.$store.dispatch('categories');
            }
        },

        onCategoryClear() {
            this.category = {};
            this.$validator.clean();
        },

        onCategoryDelete(item) {
            http.requestDelete(`${Url.Admin.Category}/${item._id}`)
                .then(res => {
                    this.$store.dispatch('categories');
                })
                .catch(res => alert(res.data.message));
        },

        onGetUpdateModel(item) {
            this.category = Object.assign({}, item);
        }
    }
}
</script>

