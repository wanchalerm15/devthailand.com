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
                <div v-html="configs.about_content"></div>
    
                <h3 class="major">{{ configs.portfolio_title }}</h3>
                <div v-html="configs.portfolio_detail"></div>
    
                <section class="features">
                    <article>
                        <a href="#" class="image">
                            <img src="/src/images/pic04.jpg" alt="" />
                        </a>
                        <h3 class="major">Sed feugiat lorem</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
                        <a href="#" class="special">Learn more</a>
                    </article>
                    <article>
                        <a href="#" class="image">
                            <img src="/src/images/pic05.jpg" alt="" />
                        </a>
                        <h3 class="major">Nisl placerat</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
                        <a href="#" class="special">Learn more</a>
                    </article>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'about',
    computed: {
        configs() {
            return this.$store.getters.Configs;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

