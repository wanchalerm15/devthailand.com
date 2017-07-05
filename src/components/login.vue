<template>
    <div id="login" class="wrapper">
    
        <!--Login form-->
        <form v-on:submit.prevent="onLogin()" v-if="countUser > 0">
            <div class="group">
                <h3>เข้าสู่ระบบ</h3>
            </div>
    
            <div class="group">
                {{ error_message }}
            </div>
    
            <div class="group">
                <label>อีเมล์ :</label>
                <input type="text" v-model="login.email" v-validate="'required'" name="email">
                <span class="error">{{ errors.first('email') }}</span>
            </div>
    
            <div class="group">
                <label>รหัสผ่าน :</label>
                <input type="password" v-model="login.password" v-validate="'required'" name="password">
                <span class="error">{{ errors.first('password') }}</span>
            </div>
    
            <div class="group">
                <button class="button">เข้าสู่ระบบ</button>
            </div>
        </form>
    
        <!--Register form-->
        <form v-on:submit.prevent="onRegister()" v-if="countUser == 0">
            <div class="group">
                <h3>สร้างบัญชีก่อนเข้าสู่ระบบ</h3>
            </div>
    
            <div class="group">
                {{ error_message }}
            </div>
    
            <div class="group">
                <label for="">ชื่อ-สกุล :</label>
                <input type="text" v-model="register.name" v-validate="'required'" name="name">
                <span class="error">
                    {{ errors.first('name') }}
                </span>
            </div>
    
            <div class="group">
                <label for="">อีเมล์ :</label>
                <input type="text" v-model="register.email" v-validate="'required|email'" name="email">
                <span class="error">
                    {{ errors.first('email') }}
                </span>
            </div>
    
            <div class="group">
                <label for="">รหัสผ่าน :</label>
                <input type="password" v-model="register.password" v-validate="'required'" name="password">
                <span class="error">
                    {{ errors.first('password') }}
                </span>
            </div>
    
            <div class="group">
                <button class="button">บันทึกข้อมูล</button>
            </div>
        </form>
    
    </div>
</template>

<script>
import http, { Url, Cookie } from '../store/http';

export default {
    name: 'login',
    data() {
        return {
            register: {
                email: null,
                password: null,
                name: null
            },
            login: {
                email: null,
                password: null
            },
            error_message: ''
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
            this.$validator.validateAll().then(valid => {
                if (!valid) return;
                http.requestPost(Url.Register, this.register)
                    .then(res => {
                        this.$store.dispatch('countUser');
                    })
                    .catch(res => this.error_message = res.data.message);
            });
        },
        onLogin() {
            this.$validator.validateAll().then(valid => {
                if (!valid) return;
                http.requestPost(Url.Login, this.login)
                    .then(res => {
                        Cookie.authen(res.authen);
                        this.$router.push({ path: Url.Home });
                    })
                    .catch(res => this.error_message = res.data.message);
            });
        }
    }
}
</script>