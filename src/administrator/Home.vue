<template>
    <div id="admin-home">
        <div class="admin-row">
            <div class="admin-columns">
                <AddressForm></AddressForm>
            </div>
            <div class="admin-columns">
                <SocialForm></SocialForm>
            </div>
        </div>
    </div>
</template>

<script>
import SocialForm from './SocialForm.vue';
import AddressForm from './AddressForm.vue';

export default {
    name: 'admin-home',
    components: {
        SocialForm,
        AddressForm
    }
}
</script>

<style lang="scss" scoped>
.admin-row {
    >.admin-columns {
        width: 33.333333333333%;
    }
}
</style>

`
