<template>
    <div class="v-catalog-item">
        <p>{{title}}</p>
        <p>Item 1</p>
        <p>Price 100</p>
        <button>Add to cart</button>
        
    </div>
</template>

<script>
     export default {
        name: "v-catalog-item",
        components: {

        },
        props: {},
        data(){
            return {
                title: "catalog-item"
            }
        },
        computed: {},
        methods: {},
        watch: {},
        mounted(){
            console.log("catalog-item, Yulia!")
        },
     };
</script>

<style scoped>
.v-main-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;
}
</style>