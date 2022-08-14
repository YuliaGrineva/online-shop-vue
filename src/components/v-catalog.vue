<template>
    <div class="v-catalog">
        <h1>{{ title }}</h1>
       <vCatalogItem/>
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
            title: "Catalog",
        };
    },
    computed: {},
    methods: {},
    watch: {},
    mounted() {
        console.log("v-catalog, Yulia!");
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
