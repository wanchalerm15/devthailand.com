<template>
    <div id="about">
        <header>
            <div class="inner">
                <h2>{{ configs.about_head }}</h2>
                <p>{{ configs.about_detail }}</p>
            </div>
        </header>
    
        <div class="wrapper">
            <div class="inner">
    
                <h3 class="major">{{ configs.about_title }}</h3>
                <div class="details" v-html="configs.about_content"></div>
    
                <h3 class="major">{{ configs.portfolio_title }}</h3>
                <div v-html="configs.portfolio_detail"></div>
    
                <section class="features">
                    <article v-for="(item, index) in limitBy(activities, 2)" :key="item">
                        <a href="#" class="image">
                            <img :src="item.image" alt="item.topic" class="image-portfolio" />
                        </a>
                        <h3 class="major">
                            {{ item.topic }}
                        </h3>
    
                        <template v-if="activityDetail !== index">
                            <p class="ac-detail">{{ item.body | subString(100) }}</p>
                            <a @click.self="activityDetail = index" class="special">ดูรายละเอียดเพิ่มเติม</a>
                        </template>
    
                        <template v-if="activityDetail === index">
                            <p class="ac-detail">{{ item.body }}</p>
                            <a @click.self="activityDetail = null" class="special">ซ่อนรายละเอียด</a>
                        </template>
    
                    </article>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'about',
    data() {
        return {
            activityDetail: null
        }
    },
    created() {
        this.$store.dispatch('Activities');
    },
    computed: {
        configs() {
            return this.$store.getters.Configs;
        },
        activities() {
            return this.$store.getters.Activities;
        }
    }
}
</script>

<style lang="scss" scoped>
a {
    cursor: pointer;
}

.details {
    font-weight: 200;
    line-height: 2.5rem;
    text-indent: 2.5rem;
    text-align: justify;
}

.ac-detail {
    line-height: 2.23rem;
}
</style>

