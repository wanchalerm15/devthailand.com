<template>
    <div id="activity">
        <section class="admin-wrapper">
            <header>
                <h1>
                    <i class="fa fa-address-card-o"></i> จัดการกับข้อมูลกิจกรรม
                </h1>
            </header>
    
            <div class="admin-row">
                <div class="admin-columns c-side" v-if="showForm">
                    <div class="group">
                        <button class="special" @click="onReset()">ย้อนกลับ</button>
                    </div>
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
                                <a target="_blank" :href="form.image" v-if="form.image">
                                    <img :src="form.image" :alt="form.image" class="img-example">
                                </a>
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
                <div class="admin-columns c-body" v-if="!showForm">
                    <div class="group">
                        <button class="special" @click="showForm = true">เพิ่มข้อมูลใหม่</button>
                    </div>
                    <div class="admin-panel">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th width="180">หัวข้อ</th>
                                    <th>รายละเอียด</th>
                                    <th width="100">
                                        <i class="fa fa-cog"></i> จัดการ
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item of activities" :key="item">
                                    <td class="text-center">
                                        <div class="group">{{ item.topic }}</div>
                                        <a :href="item.image" target="_blank" style="display: block;">
                                            <img :src="item.image" :alt="item.topic" class="img-example">
                                        </a>
                                    </td>
                                    <td>{{ item.body }}</td>
                                    <td>
                                        <a @click="form = Object.assign({}, item), showForm = true" class="link">แก้ไข</a>
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
const defaultForm = {
    topic: null,
    body: null,
    image: null
};
export default {
    name: 'activity',
    data() {
        return {
            form: defaultForm,
            showForm: false
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
            http.requestPost(Url.Admin.Activity, this.form)
                .then(res => this.onReset())
                .catch(res => this.setError(res.message));
        },
        onUpdate(id) {
            http.requestPut(`${Url.Admin.Activity}/${id}`, this.form)
                .then(res => this.onReset())
                .catch(res => this.setError(res.message));
        },
        onDelete(id) {
            if (confirm('ต้องการลบข้อมูลจริงหรือ?'))
                http.requestDelete(`${Url.Admin.Activity}/${id}`)
                    .then(res => this.onReset())
                    .catch(res => this.setError(res.message));
        },
        onReset() {
            this.form = Object.assign({}, defaultForm);
            this.$store.dispatch('Activities');
            this.showForm = false;
        }
    },
    computed: {
        activities() {
            return this.$store.getters.Activities;
        }
    }
}
</script>

<style lang="scss" scoped>
.c-side {
    width: 60%;
    margin-left: 20%;
}

.c-body {
    width: 100%;
}

.img-example {
    max-width: 100%;
    border: solid 4px white;
    box-shadow: 0 0 5px rgba(0, 0, 0, .3);
    margin-bottom: 5px;
}

td {
    vertical-align: middle;
}

.text-overflow {
    width: 400px;
}
</style>
