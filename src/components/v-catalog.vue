<!-- eslint-disable vue/valid-v-for -->
<template>
    <div class="v-catalog">
        <h1>Catalog</h1>
        <!-- <div class="v-catalog_list"></div> -->
    
      
       <vCatalogItem
           v-for="product in products"
           :key="product.article"
           :product_data="product"
           @sendArticle="showChildArtikleInConsole"
       />
    </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item";

export default {
    name: "v-catalog",
    components: {
        vCatalogItem,
    },
    props: {},
    data() {
        return {
  products: [
    {
      image: "1.jpg",
      name: "T-shirt 1",
      price: 2100.234234234,
      article: "T1",
      available: true,
    },
    {
      image: "2.jpg",
      name: "T-shirt 2",
      price: 3150.12312412,
      article: "T2",
      available: true,
    },
    {
      image: "3.jpg",
      name: "T-shirt 3",
      price: 4200.51524,
      article: "T3",
      available: false,
    },
    {
      image: "4.jpg",
      name: "T-shirt 4",
      price: 5300.1245512,
      article: "T4",
      available: true,
      category: "Мужские"
    }
  ]


        };
    },
    computed: {},
    methods: {
        showChildArtikleInConsole(data){
            console.log(data);

        }
    },
    watch: {},
    mounted() {
        console.log("v-catalog, Yulia!");
    },
};
</script>

<style scoped>
.v-catalog {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
</style>
