<template>
  <div id="app" @scroll.prevent="handleScroll" ref="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "App",
    methods:{
      handleScroll(e) {
        this.$store.commit("setScrollY", e.srcElement.scrollingElement.scrollTop)
      }
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll)
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
}

</style>
