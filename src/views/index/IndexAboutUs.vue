<template>
  <div class="aboutUs container-fluid">
    <div class="container content-wrapper">
      <div class="img-wrapper">
        <img src="~@/assets/images/index/floor.png" alt="">
      </div>
      <div class="content"></div>
    </div>
  </div>
</template>

<script>
export default {
name: "IndexAboutUs"
}
</script>

<style scoped lang="scss">
  .aboutUs{
    margin-top: 213px;
    height: 464px;
    background-color: #EBF2FF;
    .content-wrapper{
      position: relative;
      height: 100%;
      .img-wrapper{
        position: absolute;
        left: 0;
        bottom: 0;
      }
      .content{
        margin-left: 477px;
        height: 100%;
        background-color: rosybrown;
      }
    }
  }
</style>
