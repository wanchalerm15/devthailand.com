<template>
    <section id="banner">
        <div class="inner">
            <div class="logo">
                <span class="icon fa-diamond"></span>
            </div>
            <h2>This is Solid State</h2>
            <p>
                Another free + fully responsive site template by
            </p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'home',
    props: {
        template: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>

</style>