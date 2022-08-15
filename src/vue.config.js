module.exports = {
    scss: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/styles/styles.scss";`
            }
        }
    }
}