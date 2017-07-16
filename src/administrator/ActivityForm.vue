<template>
    <div id="acticities-admin">
        <section class="admin-panel">
            <header>
                <h3 class="header">
                    <i class="fa fa-share-o"></i> แก้ไขข้อมูลกิจกรรมหลัก {{ type }}
                </h3>
            </header>
    
            <div class="group">
                <label :for="`activity_title${type}`">
                    หัวข้อ :
                </label>
                <input type="text" class="input" :id="`activity_title${type}`" v-model="form[`activity_title${type}`]" @blur="onSubmit($event)">
            </div>
    
            <div class="group">
                <label :for="`activity_detail${type}`">
                    รายละเอียด :
                </label>
                <textarea type="text" class="input" :id="`activity_detail${type}`" rows="5" v-model="form[`activity_detail${type}`]" @blur="onSubmit($event)"></textarea>
            </div>
    
            <div class="admin-row">
                <div class="admin-columns">
                    <div class="group">
                        <label :for="`activity_image${type}`">
                            รูปภาพ :
                        </label>
                        <textarea type="text" class="input" rows="3" :id="`activity_image${type}`" v-model="form[`activity_image${type}`]" @blur="onSubmit($event)" @keyup="image = $event.currentTarget.value"></textarea>
                    </div>
                </div>
                <div class="admin-columns">
                    <img :src="image" :alt="image" v-if="image" class="image-activity">
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import http, { Url } from '../http';
export default {
    name: 'acticities-home',
    props: ['type'],
    data() {
        return {
            form: {},
            image: null
        }
    },
    created() {
        this.form[`activity_image${this.type}`] = null;
        this.form[`activity_title${this.type}`] = null;
        this.form[`activity_detail${this.type}`] = null;
        Object.assign(this.form, this.$store.getters.Configs);
        this.image = this.form[`activity_image${this.type}`];
    },
    methods: {
        onSubmit(event) {
            const element = event.currentTarget;
            const id = this.form._id;
            const model = {};
            model[element.id] = element.value;
            http.requestPost(Url.Admin.Address, { model, id })
                .catch((err => this.setError(err.message)));
        }
    }
}
</script>

<style lang="scss" scoped>
.admin-row {
    >.admin-columns {
        &:first-child {
            width: 70%;
        }
        &:last-child {
            width: 30%;
        }
    }
}

.image-activity {
    width: 130px;
    height: 120px;
    border-radius: 100%;
    border: solid 4px white;
    box-shadow: 0 0 5px rgba(0, 0, 0, .3);
    display: block;
    margin: auto;
}
</style>