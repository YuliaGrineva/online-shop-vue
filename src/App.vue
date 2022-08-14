

<template>
    <div id="app">
        <p>Hello!</p>
        <vMainWrapper></vMainWrapper>
        </div>
</template>

<script>
import vMainWrapper from "./components/v-main-wrapper";

export default {
    name: "app",
    components: {
      vMainWrapper,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
