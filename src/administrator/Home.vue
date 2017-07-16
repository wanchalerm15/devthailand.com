<template>
    <div id="admin-home" class="scroll" v-if="loaded">
        <h1>
            <i class="fa fa-home"></i> จัดการข้อมูลแต่ละหน้าของเว็บไซต์
        </h1>
    
        <div class="admin-row row-1">
            <div class="admin-columns">
                <WelcomeForm></WelcomeForm>
            </div>
            <div class="admin-columns">
                <AddressForm></AddressForm>
            </div>
            <div class="admin-columns">
                <SocialForm></SocialForm>
            </div>
        </div>
    
        <div class="admin-row row-2">
            <div class="admin-columns">
                <AboutForm></AboutForm>
            </div>
            <div class="admin-columns">
                <PortfolioForm></PortfolioForm>
            </div>
        </div>
    
        <div class="admin-row row-1">
            <div class="admin-columns">
                <ContactForm></ContactForm>
            </div>
        </div>
    </div>
</template>

<script>
import SocialForm from './SocialForm.vue';
import AddressForm from './AddressForm.vue';
import WelcomeForm from './WelcomeForm.vue';
import AboutForm from './AboutForm.vue';
import PortfolioForm from './PortfolioForm.vue';
import ContactForm from './ContactForm.vue';

export default {
    name: 'admin-home',
    components: {
        SocialForm,
        AddressForm,
        WelcomeForm,
        AboutForm,
        PortfolioForm,
        ContactForm
    },
    data() {
        return {
            loaded: false
        }
    },
    created() {
        this.$store
            .dispatch('Configs')
            .then(() => this.loaded = true);
    }
}
</script>

<style lang="scss" scoped>
.admin-row .admin-columns {
    margin-bottom: 20px;
}

.row-1>.admin-columns {
    width: 33.333333333333%;
}

.row-2 {
    >.admin-columns:first-child {
        width: 66.666666666666%;
    }
    >.admin-columns:last-child {
        width: 33.333333333333%;
    }
}
</style>
