<template>
    <div id="address-admin">
        <section class="admin-panel">
            <header>
                <h3 class="header">
                    <i class="fa fa-address-card"></i> แก้ไขข้อมูลที่อยู่ของฉัน
                </h3>
            </header>
            <div class="group">
                <label for="address">ที่อยู่ติดต่อ :</label>
                <textarea id="address" rows="4" class="input" @blur="onSubmit({address: form.address})" v-model="form.address"></textarea>
            </div>
    
            <div class="group">
                <label for="email">ที่อยู่อีเมล์ :</label>
                <input type="text" class="input" id="email" @blur="onSubmit({email: form.email})" v-model="form.email">
            </div>
    
            <div class="group">
                <label for="phone">เบอร์โทรศัพท์ :</label>
                <input type="text" class="input" id="phone" @blur="onSubmit({phone: form.phone})" v-model="form.phone">
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
        this.onReload();
    },
    methods: {
        onSubmit(model) {
            const id = this.form._id;
            http.requestPost(Url.Admin.Address, { model, id })
                .then(res => {
                    if (!id) this.onReload();
                })
                .catch((err => this.setError(err.message)));
        },
        onReload() {
            this.$store
                .dispatch('Configs')
                .then(() => this.form = Object.assign({}, this.$store.getters.Configs));
        }
    }
}
</script>

<style lang="scss" scoped>

</style>


