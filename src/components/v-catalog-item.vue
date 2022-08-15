<template>
    <div class="v-catalog-item">
        <img class="v-catalog-item-image" :src=" require('../assets/images/' +  product_data.image) " alt="">
        <p class="v-catalog-item-name">{{product_data.name}}</p>
        <p class="v-catalog-item-price">Price: {{product_data.price}} EUR</p>
        <button class="v-catalog-item-add-to-cart-btn btn" @click="sendDataToParent">Add to cart</button>
        
    </div>
</template>

<script>
     export default {
        name: "v-catalog-item",
        components: {

        },
        props: {
            product_data: {
                type: Object,
                default(){
                    return {}
                }
        
            }
        },
        data(){
            return {
                title: "catalog-item"
            }
        },
        computed: {},
        methods: {
            sendDataToParent(){
                this.$emit("sendArticle", this.product_data.article)
            }
        },
        watch: {},
        mounted(){
            console.log("catalog-item, Yulia!")
        },
     };
</script>

<style lang="scss">
.v-catalog-item {
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 black;
    padding: 8px;
    margin-bottom: 2px;
    &-image{
        width: 100px;
    }
}
</style>