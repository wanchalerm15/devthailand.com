<template>
    <div id="address-admin">
        <section class="admin-panel" v-scroll>
            <header>
                <h3 class="header">
                    <i class="fa fa-address-card"></i> แก้ไขข้อมูลที่อยู่ของฉัน
                </h3>
            </header>
            <div class="group">
                <label for="address">ที่อยู่ติดต่อ :</label>
                <textarea id="address" rows="4" class="input" @blur="onSubmit($event)" v-model="form.address"></textarea>
            </div>
    
            <div class="group">
                <label for="email">ที่อยู่อีเมล์ :</label>
                <input type="text" class="input" id="email" @blur="onSubmit($event)" v-model="form.email">
            </div>
    
            <div class="group">
                <label for="phone">เบอร์โทรศัพท์ :</label>
                <input type="text" class="input" id="phone" @blur="onSubmit($event)" v-model="form.phone">
            </div>
        </section>
    </div>
</template>

<script>
import http, { Url } from '../http';
export default {
    name: 'address-home',
    data() {
        return {
            form: {
                address: null,
                email: null,
                phone: null
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


