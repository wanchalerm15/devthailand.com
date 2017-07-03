<template>
    <div id="login" class="wrapper">
        <form action="" v-if="countUser > 0">
            <div class="group">
                <h3>เข้าสู่ระบบ</h3>
            </div>
        </form>
    
        <form v-on:submit.prevent="onRegister()" v-if="countUser == 0">
            <div class="group">
                <h3>สร้างบัญชีก่อนเข้าสู่ระบบ</h3>
            </div>
    
            <div class="group">
                <label for="">ชื่อ-สกุล :</label>
                <input type="text" v-model="register.name">
            </div>
    
            <div class="group">
                <label for="">ชื่อผู้ใช้งาน :</label>
                <input type="text" v-model="register.username">
            </div>
    
            <div class="group">
                <label for="">รหัสผ่าน :</label>
                <input type="text" v-model="register.password">
            </div>
    
            <div class="group">
                <button class="button">บันทึกข้อมูล</button>
            </div>
        </form>
    </div>
</template>

<script>
import http from '../store/http';

export default {
    name: 'login',
    data() {
        return {
            register: {
                username: null,
                password: null,
                name: null
            }
        }
    },
    created() {
        this.$store.dispatch('countUser');
    },
    computed: {
        countUser() {
            return this.$store.getters.countUser;
        }
    },
    methods: {
        onRegister() {
            http.requestPost('register', this.register)
                .then(res => console.log(res));
        }
    }
}
</script>