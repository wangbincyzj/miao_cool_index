<template>
  <div class="layout">
    <Header/>
    <router-view class="container-fluid"/>
  </div>
</template>

<script>
import Header from "@/views/_layout/Header";

export default {
  name: "Layout",
  components: {Header},
}
</script>

<style scoped lang="scss">
  .layout{
    width: 100%;
  }
</style>
