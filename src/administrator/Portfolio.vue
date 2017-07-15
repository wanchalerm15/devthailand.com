<template>
    <div id="portfolio">
        <section class="admin-wrapper">
            <header>
                <h1>
                    <i class="fa fa-graduation-cap"></i> จัดการกับข้อมูลผลงาน
                </h1>
            </header>
            <div class="admin-row">
                <div class="admin-columns c-side">
                    <div class="admin-panel">
                        <form @submit.prevent="onSubmit()">
                            <div class="group">
                                <label for="topic">หัวข้อ :</label>
                                <input type="text" v-model="form.topic" class="input" id="topic" name="topic" v-validate="'required'">
                                <p class="error">{{ errors.first('topic') }}</p>
                            </div>
    
                            <div class="group">
                                <label for="body">รายละเอียด :</label>
                                <textarea type="text" v-model="form.body" class="input" id="body" name="body" v-validate="'required'" rows="5"></textarea>
                                <p class="error">{{ errors.first('body') }}</p>
                            </div>
    
                            <div class="group">
                                <label for="image">ที่อยู่รูปภาพ :</label>
                                <input type="text" v-model="form.image" name="image" id="image" class="input">
                            </div>
    
                            <div class="group">
                                <button type="submit" class="special fit">
                                    <i class="fa fa-save"></i> บันทึกข้อมูล
                                </button>
                            </div>
    
                            <div class="group">
                                <button @click="onReset()" type="button" class="special fit default">
                                    <i class="fa fa-refresh"></i> ล้างข้อมูล
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="admin-columns c-body">
                    <div class="admin-panel">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>หัวข้อ</th>
                                    <th>รายละเอียด</th>
                                    <th>รูปภาพ</th>
                                    <th>
                                        <i class="fa fa-cog"></i> จัดการ
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item of activities" :key="item">
                                    <td>{{ item.topic }}</td>
                                    <td>{{ item.body }}</td>
                                    <td>
                                        <a class="link" target="_blank" :href="item.image">ดูภาพ</a>
                                    </td>
                                    <td>
                                        <a @click="form = Object.assign({}, item)" class="link">แก้ไข</a>
                                        |
                                        <a @click="onDelete(item._id)" class="link">ลบ</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import http, { Url } from '../http';

export default {
    name: 'portfolio',
    data() {
        return {
            form: {
                topic: null,
                body: null,
                image: null
            }
        }
    },
    created() {
        this.onReset();
    },
    methods: {
        onSubmit() {
            this.$validator.validateAll().then(valid => {
                if (valid) {
                    if (this.form._id)
                        this.onUpdate(this.form._id);
                    else
                        this.onInsert();
                }
                else {
                    this.setError('validate');
                }
            })
        },
        onInsert() {
            http.requestPost(Url.Admin.Portfolio, this.form)
                .then(res => this.onReset())
                .catch(res => this.setError(res.message));
        },
        onUpdate(id) {
            http.requestPut(`${Url.Admin.Portfolio}/${id}`, this.form)
                .then(res => this.onReset())
                .catch(res => this.setError(res.message));
        },
        onDelete(id) {
            if (confirm('ต้องการลบข้อมูลจริงหรือ?'))
                http.requestDelete(`${Url.Admin.Portfolio}/${id}`)
                    .then(res => this.onReset())
                    .catch(res => this.setError(res.message));
        },
        onReset() {
            this.form = {};
            this.$store.dispatch('Activities');
        }
    },
    computed: {
        activities() {
            return this.$store.getters.Activities.filter(m => m.type == 2);
        }
    }
}
</script>

<style lang="scss" scoped>
.c-side {
    width: 35%;
}

.c-body {
    width: 65%;
}
</style>
