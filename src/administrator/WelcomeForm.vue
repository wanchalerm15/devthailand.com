<template>
    <div id="welcome-admin">
        <section class="admin-panel" v-scroll>
            <header>
                <h3 class="header">
                    <i class="fa fa-home"></i> เนื้อหาหน้าแรก
                </h3>
            </header>
    
            <a class="logo" v-if="form.welcome_logo" :href="form.welcome_logo" target="_blank">
                <img :src="form.welcome_logo" :alt="form.welcome_logo">
                <label for="welcome_logo">Welcome</label>
            </a>
            <label for="welcome_logo" v-else>
                Url ภาพต้อนรับ :
            </label>
            <div class="group">
                <input type="text" class="input" id="welcome_logo" v-model="form.welcome_logo" @blur="onSubmit($event)">
            </div>
    
            <div class="group">
                <label for="welcome_head">ข้อความต้อนรับ :</label>
                <textarea type="text" class="input" id="welcome_head" v-model="form.welcome_head" @blur="onSubmit($event)" rows="2"></textarea>
            </div>
    
            <div class="group">
                <label for="welcome_detail">
                    รายละเอียดตอนรับ
                </label>
                <textarea type="text" class="input" id="welcome_detail" v-model="form.welcome_detail" @blur="onSubmit($event)" rows="3"></textarea>
            </div>
        </section>
    </div>
</template>

<script>
import http, { Url } from '../http';
export default {
    name: 'welcome-admin',
    data() {
        return {
            form: {
                welcome_logo: null,
                welcome_head: null,
                welcome_detail: null
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
.logo {
    text-align: center;
    display: block;
    position: relative;
    width: 140px;
    height: 140px;
    border-radius: 100%;
    margin: auto;
    overflow: hidden;
    box-shadow: 0 0 5px rgba(0, 0, 0, .5);
    border: solid 2px rgba(255, 255, 255, 0.1);
    margin-bottom: 15px;

    label {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        margin-top: -7px;
        color: white !important;
    }

    img {
        width: 100%;
        height: 100%;
    }
}
</style>

