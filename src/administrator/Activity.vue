<template>
    <div id="activity">
        <section class="admin-wrapper">
            <header>
                <h1>
                    <i class="fa fa-address-card-o"></i> จัดการกับข้อมูลกิจกรรม
                </h1>
            </header>
            <div class="admin-row">
                <div class="admin-columns c-side">
                    <div class="admin-panel">
                        <form action="">
                            <div class="group">
                                <label for="topic">หัวข้อ :</label>
                                <input type="text" class="input" id="topic" name="topic" v-validate="'required'">
                                <p class="error">{{ errors.first('topic') }}</p>
                            </div>
    
                            <div class="group">
                                <label for="body">รายละเอียด :</label>
                                <textarea type="text" class="input" id="body" name="body" v-validate="'required'" rows="5"></textarea>
                                <p class="error">{{ errors.first('body') }}</p>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="admin-columns c-body">
                    <div class="admin-panel"></div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'activity'
}
</script>

<style lang="scss" scoped>
.c-side {
    width: 35%;
}

.c-body {
    width: 65%;
}
</style>
