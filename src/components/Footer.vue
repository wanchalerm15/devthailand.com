<template>
    <section id="footer">
        <div class="inner">
    
            <h2 class="major">{{ configs.contact_title }}</h2>
            <div v-html="configs.contact_detail"></div>
    
            <form method="post" action="#">
                <div class="field">
                    <label for="name">ชื่อและนามสกุล :</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div class="field">
                    <label for="email">ที่อยู่อีเมล์ :</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div class="field">
                    <label for="message">ข้อความ :</label>
                    <textarea name="message" id="message" rows="4"></textarea>
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
                <li class="fa-phone">
                    <a :href="`tel:${configs.phone}`" target="_blank">{{ configs.phone }}</a>
                </li>
                <li class="fa-envelope">
                    <a :href="`mailTo:${configs.email}`" target="_blank">{{ configs.email }}</a>
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
export default {
    name: 'footer',
    computed: {
        configs() {
            return this.$store.getters.Configs;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

