<template>
    <section id="footer">
        <div class="inner">
    
            <h2 class="major">{{ configs.contact_title }}</h2>
            <div v-html="configs.contact_detail"></div>
    
            <form @submit.prevent="onMessageSubmit()" autocomplete="off">
                <div class="field">
                    <label for="message_name">ชื่อและนามสกุล :</label>
                    <div class="group">
                        <input type="text" name="message_name" id="message_name" v-model="form.message_name" v-validate="'required'" />
                        <p class="error">{{ errors.first('message_name') }}</p>
                    </div>
                </div>
                <div class="field">
                    <label for="message_email">ที่อยู่อีเมล์ :</label>
                    <div class="group">
                        <input type="email" name="message_email" id="message_email" v-model="form.message_email" v-validate="'required|email'" />
                        <p class="error">{{ errors.first('message_email') }}</p>
                    </div>
                </div>
                <div class="field">
                    <label for="message_content">ข้อความ :</label>
                    <div class="group">
                        <textarea name="message_content" id="message_content" rows="4" v-model="form.message_content" v-validate="'required'"></textarea>
                        <p class="error">{{ errors.first('message_content') }}</p>
                    </div>
                </div>
                <ul class="actions">
                    <li>
                        <button type="submit">
                            <i class="fa fa-send"></i> ส่งข้อความ
                        </button>
                    </li>
                </ul>
            </form>
            <ul class="contact">
                <li class="fa-home" v-html="configs.address"></li>
                <li class="fa-envelope">
                    <a :href="`mailTo:${configs.email}`" target="_blank">{{ configs.email }}</a>
                </li>
                <li class="fa-google-plus">
                    <a :href="`${configs.google_plus}`" target="_blank">{{ configs.google_plus }}</a>
                </li>
                <li class="fa-twitter">
                    <a :href="configs.twitter" target="_blank">{{ configs.twitter }}</a>
                </li>
                <li class="fa-facebook">
                    <a :href="configs.facebook" target="_blank">{{ configs.facebook }}</a>
                </li>
                <li class="fa-instagram">
                    <a :href="configs.instagram" target="_blank">{{ configs.instagram }}</a>
                </li>
            </ul>
            <ul class="copyright">
                <li>&copy; Copyright all 2017</li>
                <li>
                    Website :
                    <a href="http://devthailand.com">devthailand.com</a>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import http, { Url } from '../http';
const form = {
    message_name: null,
    message_email: null,
    message_content: null
};

export default {
    name: 'footer',
    data() {
        return {
            form: Object.assign({}, form)
        }
    },
    computed: {
        configs() {
            return this.$store.getters.Configs;
        }
    },
    methods: {
        onMessageSubmit() {
            this.$validator.validateAll().then(valid => {
                if (!valid)
                    return this.setError('validate')
                http.requestPost(Url.Contact, this.form)
                    .then(res => {
                        this.onResetForm();
                        this.setError('ทำรายการเรียบร้อย ส่งข้อความสำเร็จ', true);
                    })
            });
        },
        onResetForm() {
            this.form = Object.assign({}, form);
        }
    }
}
</script>

<style lang="scss" scoped>
ul.contact li {
    white-space: normal;
}

@media screen and (max-width: 767px) {
    ul.contact li {
        white-space: nowrap;
    }
}
</style>

