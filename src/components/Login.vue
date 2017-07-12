<template>
    <div id="login">
        <header>
            <div class="inner">
                <h2>
                    <i class="fa fa-sign-in"></i> เข้าสู่ระบบ
                </h2>
                <p class="thaifont">
                    เข้าสู่ระบบเพื่อไปแก้ไขจัดการข้อมูลเนื้อหาของเว็บไซต์ ไม่ว่าจะเป็น ข้อมูลงาน ข้อมูลผลงาน รายการข้อมูลการติดต่อมาจากลูกค้าเพื่อสอบภามปัญหาในการใช้งานเว็บไซต์ (สำหรับผู้ดูแลระบบเท่านั้น)
                </p>
            </div>
        </header>
    
        <div class="wrapper">
            <div class="inner">
                <div class="row">
                    <div class="6u 12u$(small)">
                        <p class="strong">
                            <strong>devthailand.com</strong>
                        </p>
                        <p class="thaifont strong-detail">
                            ถ้าคุณเข้าสู่ระบบไปแล้ว คุณจะสามารถเข้าไปแก้ไข เนื้อหาบางส่วนของเว็บไซต์ได้ (สำหรับผู้ดูแลระบบเท่านั้น)
                            <a href="">กลับไปหน้าหลัก</a> ถ้าคุณไม่ใช่ผู้ดูแลระบบ
                        </p>
                    </div>
                    <div class="6u 12u$(small)">
                        <form method="post" @submit.prevent="onSubmit()" autocomplete="off">
                            <div class="group">
                                <label for="username">Username :</label>
                                <input type="text" name="username" id="username" v-validate="'required'" v-model="form.Username" />
                                <p class="error">{{ errors.first('username') }}</p>
                            </div>
    
                            <div class="group">
                                <label for="password">Password :</label>
                                <input type="text" name="password" id="password" v-validate="'required'" v-model="form.Password" />
                                <p class="error">{{ errors.first('password') }}</p>
                            </div>
    
                            <div class="group-btn">
                                <button type="submit" class="special fit">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import http, { Url } from '../http';

export default {
    name: 'login',
    data() {
        return {
            form: {
                Username: '',
                Password: ''
            }
        }
    },
    methods: {
        onSubmit() {
            // http.requistPost(Url.Login)
            //     .then()
            this.$validator.validateAll().then(v => {
                console.log(v);
                if (v) {
                    return;
                }
                console.log(this.$validator.all());
            });
            this.setError(JSON.stringify(this.form));
        }
    }
}
</script>

<style lang="scss" scoped>
.strong {
    text-transform: uppercase;
    font-size: 25px;
    letter-spacing: 5px;
    margin: 0 0 15px 0;
}

.strong-detail {
    font-weight: 200;
    line-height: 2.2em;
}

@media screen and (max-width: 736px) {
    header {
        display: none;
    }
}
</style>
