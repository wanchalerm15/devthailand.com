<template>
    <div id="admin-home" v-if="loaded">
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
    
        <div class="admin-row row-3">
            <div class="admin-columns">
                <ContactForm></ContactForm>
            </div>
            <div class="admin-columns">
                <ActivityForm type="1"></ActivityForm>
            </div>
        </div>
    
        <div class="admin-row row-4">
            <div class="admin-columns">
                <ActivityForm type="2"></ActivityForm>
            </div>
            <div class="admin-columns">
                <ActivityForm type="3"></ActivityForm>
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
import ActivityForm from './ActivityForm.vue';

export default {
    name: 'admin-home',
    components: {
        SocialForm,
        AddressForm,
        WelcomeForm,
        AboutForm,
        PortfolioForm,
        ContactForm,
        ActivityForm
    },
    data() {
        return {
            loaded: false
        }
    },
    created() {
        this.$store
            .dispatch('Configs')
            .then(() => {
                this.loaded = true;
                this.processHeightColumns();
            });
    },
    methods: {
        processHeightColumns() {
            setTimeout(() => {
                try {
                    $('.admin-row').each((row_index, row) => {
                        const columns = $(row).find('.admin-columns');
                        let height = 0;
                        columns.each((col_index, col) => {
                            if (col.offsetHeight > height)
                                height = col.offsetHeight;
                        });
                        $(columns).find('.admin-panel').css('min-height', `${height}px`);
                    });
                }
                catch (e) { }
            }, 0);
        }
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

.row-3 {
    >.admin-columns:first-child {
        width: 33.333333333333%;
    }
    >.admin-columns:last-child {
        width: 66.666666666666%;
    }
}

.row-4 {
    >.admin-columns {
        width: 50%;
    }
}
</style>
