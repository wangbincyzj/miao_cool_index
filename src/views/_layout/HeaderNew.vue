<template>
  <div id="header" class="container row">
    <div class="logo-area">
      <img src="~@/assets/images/index/logo.png" >
    </div>
    <ul class="menu-area row">
      <li
          v-for="item in menuList"
          :key="item.path"
          @click="go(item.path)"
      >{{item.label}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HeaderNew",
  data() {
    return {
      menuList: [
        {label: "首页", path: "/"},
        {label: "案例", path: "/demo"},
        {label: "服务", path: "/service"},
        {label: "关于我们", path: "/about"},
        {label: "联系我们", path: "/contact"},
      ]
    }
  }
}
</script>

<style scoped lang="scss">
#header {
  height: 86px;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  .menu-area {
    li{
      margin-left: 80px;
      font-size: 18px;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>
