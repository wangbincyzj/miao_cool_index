<template>
  <div>
    <div>{{$route.fullPath}}  not found</div>
    <div @click="go('/')">回到首页</div>
  </div>
</template>

<script>
export default {
name: "Layout404"
}
</script>

<style scoped>

</style>
