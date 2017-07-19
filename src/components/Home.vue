<template>
    <div id="home">
        <!-- One -->
        <section id="one" class="wrapper spotlight style1">
            <div class="inner">
                <a href="#" class="image" v-if="configs.activity_image1">
                    <img :src="configs.activity_image1" :alt="configs.activity_title1" />
                </a>
                <div class="content">
                    <h2 class="major">{{ configs.activity_title1 }}</h2>
                    <p>{{ configs.activity_detail1 }}</p>
                    <a @click="onFocusMessageForm()" class="special">ส่งข้อความเพิ่อติดต่อเรา</a>
                </div>
            </div>
        </section>
    
        <!-- Two -->
        <section id="two" class="wrapper alt spotlight style2">
            <div class="inner">
                <a href="#" class="image" v-if="configs.activity_image2">
                    <img :src="configs.activity_image2" :alt="configs.activity_title2" />
                </a>
                <div class="content">
                    <h2 class="major">{{ configs.activity_title2 }}</h2>
                    <p>{{ configs.activity_detail2 }}</p>
                    <a @click="onFocusMessageForm()" class="special">ส่งข้อความเพิ่อติดต่อเรา</a>
                </div>
            </div>
        </section>
    
        <!-- Three -->
        <section id="three" class="wrapper spotlight style3">
            <div class="inner">
                <a href="#" class="image" v-if="configs.activity_image3">
                    <img :src="configs.activity_image3" :alt="configs.activity_title1" />
                </a>
                <div class="content">
                    <h2 class="major">{{ configs.activity_title3 }}</h2>
                    <p>{{ configs.activity_detail3 }}</p>
                    <a @click="onFocusMessageForm()" class="special">ส่งข้อความเพิ่อติดต่อเรา</a>
                </div>
            </div>
        </section>
    
        <!-- Four -->
        <section id="four" class="wrapper alt style1">
            <div class="inner">
    
                <h2 class="major">{{ configs.portfolio_title }}</h2>
                <div v-html="configs.portfolio_detail"></div>
    
                <section class="features">
                    <article v-for="(item, index) of limitBy(activities, limit)" :key="item._id">
                        <a href="#" class="image">
                            <img :src="item.image" :alt="item.topic" class="image-portfolio" />
                        </a>
                        <h3 class="major">
                            {{ item.topic }}
                        </h3>
    
                        <template v-if="activityDetail !== index">
                            <p class="details">{{ item.body | subString(100) }}</p>
                            <a @click.self="activityDetail = index" class="special">ดูรายละเอียดเพิ่มเติม</a>
                        </template>
    
                        <template v-if="activityDetail === index">
                            <p class="details">{{ item.body }}</p>
                            <a @click.self="activityDetail = null" class="special">ซ่อนรายละเอียด</a>
                        </template>
    
                    </article>
                </section>
                <ul class="actions" v-if="activities.length > 4">
                    <li>
                        <a @click="limit = activities.length" class="button" v-if="limit == 4">ดูกิจกรรมทั้งหมด</a>
                        <a @click="limit = 4" class="button" v-if="limit != 4">ซ่อนกิจกรรม</a>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            activityDetail: null,
            limit: 4
        }
    },
    created() {
        this.$store.dispatch('Activities');
    },
    computed: {
        activities() {
            return this.$store.getters.Activities;
        },
        configs() {
            return this.$store.getters.Configs;
        }
    },
    methods: {
        onFocusMessageForm() {
            $('#message_name').focus();
        }
    }
}
</script>

<style lang="scss" scoped>
a {
    cursor: pointer;
}

.alt.style1 {
    border-bottom: solid 1px #2e3141;
}

.spotlight p,
.details {
    line-height: 2.23rem;
}
</style>