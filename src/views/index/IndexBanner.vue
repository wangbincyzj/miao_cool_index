<template>
  <div class="img-wrapper">
    <img :class="[grow? 'grow': '']" src="~@/assets/images/index/banner.png" alt="">
    <div class="text-area col">
      <span class="title">喵酷为您创造更大商业价值</span>
      <div class="rich-text">
        <span>已帮助</span>
        <span class="highlight">36557</span>
        <span>企业开发网站、小程序</span>
      </div>
      <div @mouseenter="grow=false" @mouseleave="grow=true" class="button">马上体验</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexBanner",
  data() {
    return {
      grow: false
    }
  },
  mounted() {
    setTimeout(()=>{
      this.grow = true
    })
  }
}
</script>

<style scoped lang="scss">
.img-wrapper {
  margin: 0 auto;
  height: 686px;
  background-color: #57a3f3;
  overflow: hidden;
  position: relative;
  img{
    width: auto;
    height: 100%;
    position: absolute;
    left: 50%;
    margin: 0 auto;
    transition: all 5s linear;
    transform:translateX(-50%) scale(1.2) ;
    &.grow{
      transform:translateX(-50%) scale(1) ;
    }
  }
}
.text-area{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  width: 895px;
  top: 225px;
  .title{
    font-size: 70px;
    font-family: PangMenZhengDao;
    color: #FFFFFF;
    line-height: 89px;
    letter-spacing: 1px;
    margin-bottom: 70px;
  }
  .rich-text{
    font-size: 32px;
    margin-bottom: 61px;
    .highlight{
      color: #3783FF;
      margin: 0 21px;
    }
  }
  .button{
    cursor: pointer;
    width: 187px;
    height: 58px;
    line-height: 58px;
    text-align: center;
    font-weight: 600;
    background: rgba(255, 255, 255, 0.44);
    border-radius: 29px;
    transition: all .5s;
    &:hover{
      background-color: rgba(255, 255, 255, 0.8);
      color: #3783FF;
    }
  }
}
</style>
