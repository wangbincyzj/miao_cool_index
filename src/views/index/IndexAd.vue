<template>
  <div class="index-ad col" :class="{active:active}">
    <div>喵酷为您一起创造更优体验</div>
    <div @mouseenter="active=true" @mouseleave="active=false">立即咨询</div>
  </div>
</template>

<script>
export default {
  name: "IndexAd",
  data() {
    return{
      active: false
    }
  }
}
</script>

<style scoped lang="scss">
  .index-ad{
    height: 328px;
    margin-top: 60px;
    background: url("https://s1.ax1x.com/2020/11/02/BrJ1IO.png") center;
    transition: all 5s;
    background-size: 100%;
    color: white;
    div:nth-child(1){
      margin-top: 81px;
      font-weight: 600;
      color: #FFFFFF;
      line-height: 48px;
      letter-spacing: 2px;
      font-size: 34px;
    }
    div:nth-child(2){
      padding: 16px 36px;
      margin-top: 44px;
      border: 1px solid #eee;
      color: #eee;
      cursor: pointer;
      transition: all 5s;
      &:hover{
        border: 1px solid #57a3f3;

        background-color: #57a3f3;
      }
    }
  }
  .active{
    background-size: 200%;
  }
</style>
