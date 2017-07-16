<template>
    <div id="portfolio-admin">
        <section class="admin-panel" v-scroll>
            <header>
                <h3 class="header">
                    <i class="fa fa-graduation-cap"></i> แก้ไขข้อมูลผลงาน
                </h3>
            </header>
    
            <div class="group">
                <label for="portfolio_title">หัวข้อ :</label>
                <input type="text" class="input" id="portfolio_title" @blur="onSubmit($event)" v-model="form.portfolio_title">
            </div>
    
            <div class="group">
                <label for="portfolio_detail">รายละเอียด :</label>
                <textarea id="portfolio_detail" rows="7" class="input" @blur="onSubmit($event)" v-model="form.portfolio_detail"></textarea>
            </div>
        </section>
    </div>
</template>

<script>
import http, { Url } from '../http';
export default {
    name: 'portfolio-home',
    data() {
        return {
            form: {
                portfolio_title: null,
                portfolio_detail: null,
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

</style>