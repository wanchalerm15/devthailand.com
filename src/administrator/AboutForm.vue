<template>
    <div id="about-admin">
        <section class="admin-panel">
            <header>
                <h3 class="header">
                    <i class="fa fa-info-circle"></i> เนื้อหาหน้าเกี่ยวกับเรา
                </h3>
            </header>
    
            <div class="admin-row row-1">
                <div class="admin-columns">
                    <div class="group">
                        <label for="about_head">ข้อความต้อนรับ :</label>
                        <textarea type="text" class="input" id="about_head" v-model="form.about_head" @blur="onSubmit($event)" rows="2"></textarea>
                    </div>
                </div>
                <div class="admin-columns">
                    <div class="group">
                        <label for="about_detail">
                            รายละเอียดต้อนรับ
                        </label>
                        <textarea type="text" class="input" id="about_detail" v-model="form.about_detail" @blur="onSubmit($event)" rows="2"></textarea>
                    </div>
                </div>
            </div>
    
            <div class="group">
                <label for="about_title">
                    หัวข้อของหน้า
                </label>
                <input type="text" class="input" id="about_title" v-model="form.about_title" @blur="onSubmit($event)">
            </div>
    
            <div class="group">
                <label for="about_content">
                    เนื้อหาของหน้า
                </label>
                <textarea type="text" class="input" id="about_content" v-model="form.about_content" @blur="onSubmit($event)" rows="7"></textarea>
            </div>
        </section>
    </div>
</template>

<script>
import http, { Url } from '../http';
export default {
    name: 'about-admin',
    data() {
        return {
            form: {
                about_head: null,
                about_detail: null,
                about_title: null,
                about_content: null
            }
        }
    },
    created() {
        Object.assign(this.form, this.$store.getters.Configs);
    },
    methods: {
        onSubmit(event) {
            const element = event.currentTarget;
            const id = this.form._id;
            const model = {};
            model[element.id] = element.value;
            http.requestPost(Url.Admin.Address, { model, id })
                .catch((err => this.setError(err.message)));
        }
    }
}
</script>

<style lang="scss" scoped>
.row-1 {
    .admin-columns {
        width: 50%;
    }
}
</style>

