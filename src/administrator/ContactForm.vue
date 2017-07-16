<template>
    <div id="contact-admin">
        <section class="admin-panel">
            <header>
                <h3 class="header">
                    <i class="fa fa-info-circle"></i> แก้ไขเนื้อหาติดต่อเรา
                </h3>
            </header>
    
            <div class="group">
                <label for="contact_title">
                    หัวข้อ
                </label>
                <input type="text" class="input" id="contact_title" v-model="form.contact_title" @blur="configSubmit($event)">
            </div>
    
            <div class="group">
                <label for="contact_detail">
                    รายละเอียด
                </label>
                <textarea type="text" class="input" id="contact_detail" v-model="form.contact_detail" @blur="configSubmit($event)" rows="7"></textarea>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'contact-admin',
    data() {
        return {
            form: {
                contact_title: null,
                contact_detail: null
            }
        }
    },
    created() {
        Object.assign(this.form, this.$store.getters.Configs);
    }
}
</script>

<style lang="scss" scoped>

</style>