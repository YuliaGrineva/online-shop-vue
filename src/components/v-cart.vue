<template>
    <div class="v-cart">
        <p>{{ title }}</p>
    </div>
</template>

<script>
export default {
    name: "v-cart",
    components: {},
    props: {},
    data() {
        return {
            title: "cart",
        };
    },
    computed: {},
    methods: {},
    watch: {},
    mounted() {
        console.log("cart, Yulia!");
    },
};
</script>

<style>
.v-main-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;
}
</style>
