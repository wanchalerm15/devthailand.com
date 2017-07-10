<template>
    <div id="category">
        <div class="row">
            <div class="columns">
                <div class="box">
                    <form @submit.prevent="onCategoryPost()">
                        <div class="group">
                            {{ error_message }}
                        </div>
    
                        <div class="group">
                            <label>ชื่อประเภท :</label>
                            <input type="text" class="input" name="category_name" v-validate="'required'" v-model="category.category_name">
                            <span class="error">{{ errors.first('category_name') }}</span>
                        </div>
    
                        <div class="group">
                            <label>รายละเอียด :</label>
                            <textarea type="text" class="input" rows="5" v-model="category.category_detail"></textarea>
                        </div>
    
                        <div class="group">
                            <button class="button" type="submit">บันทึกข้อมูล</button>
                            <a class="button" @click="onCategoryClear()">ล้างข้อมูล</a>
                        </div>
                    </form>
                </div>
            </div>
    
            <div class="columns">
                <div class="box">
                    <table class="table">
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
                                    <button class="button sm" @click="onGetUpdateModel(item)">แก้ไข</button>
                                    <button class="button sm" @click="onCategoryDelete(item)">ลบทิ้ง</button>
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
            if (!confirm('คุณต้องการลบข้อมูลจริงหรือ !')) return;
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

<style lang="scss" scoped>
#category {
    &:after {
        content: '';
        display: block;
        clear: both;
    }
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


