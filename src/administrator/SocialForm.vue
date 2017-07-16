<template>
    <div id="social-admin">
        <section class="admin-panel">
            <header>
                <h3 class="header">
                    <i class="fa fa-share-o"></i> แก้ไขข้อมูลโซเชียลเน็ตเวิร์ค
                </h3>
            </header>
    
            <div class="group">
                <label for="twitter">
                    <i class="fa fa-twitter-square"></i> Twiiter :
                </label>
                <input type="text" class="input" id="twitter" v-model="form.twitter" @blur="onSubmit($event)">
            </div>
    
            <div class="group">
                <label for="facebook">
                    <i class="fa fa-facebook-official"></i> Fackbook :
                </label>
                <input type="text" class="input" id="facebook" v-model="form.facebook" @blur="onSubmit($event)">
            </div>
    
            <div class="group">
                <label for="instagram">
                    <i class="fa fa-instagram"></i> Instagram :
                </label>
                <input type="text" class="input" id="instagram" v-model="form.instagram" @blur="onSubmit($event)">
            </div>
    
            <div class="group">
                <label for="google_plus">
                    <i class="fa fa-google-plus-square"></i> Google plus :
                </label>
                <input type="text" class="input" id="google_plus" v-model="form.google_plus" @blur="onSubmit($event)">
            </div>
        </section>
    </div>
</template>

<script>
import http, { Url } from '../http';
export default {
    name: 'social-home',
    data() {
        return {
            form: {
                twitter: null,
                facebook: null,
                instagram: null,
                google_plus: null
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


