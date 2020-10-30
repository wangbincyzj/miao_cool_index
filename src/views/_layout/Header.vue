<template>
  <div id="header-wrapper"  :class="classObj">
    <div class="head-content container row">
      <a href="" class="logo" style="color: white;font-size: 25px;">喵酷科技</a>
      <ul class="menu-list" @mouseleave="showHeadScreen=false">
        <li @mouseenter="showHeadScreen=true" class="menu-item col"
            v-for="item in 6">
          <a class="txt" href="">简介</a>
          <ul class="sub-list">
            <li>公司简介</li>
            <li>愿景与使命</li>
            <li>发展历程</li>
            <li>业务架构</li>
            <li>管理团队</li>
            <li>企业文化</li>
            <li>办公地点</li>
          </ul>
        </li>
      </ul>
    </div>
    <transition name="growY">
      <div class="head-screen" v-if="showHeadScreen"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      showHeadScreen: false
    }
  },
  computed: {
    classObj() {
      return {
        touming: this.$store.state.scroll.y === 0,
        white: this.$store.state.scroll.y > 0 || this.showHeadScreen,
        hidden: this.$store.state.scroll.y > 150 && this.$store.state.scroll.direction === "bottom"
      }
    }
  }
}
</script>

<style scoped lang="scss">
#header-wrapper {
  width: 100%;
  top: 0;
  height: 72px;
  position: fixed;
  z-index: 2;
  transition: all 0.2s linear;
  align-items: center;

}

.head-content {
  height: 100%;

  ul.menu-list {
    display: flex;
    align-items: center;

    height: 100%;

    li.menu-item {
      width: 160px;
      line-height: 72px;
      height: 100%;
      text-align: center;
      position: relative;

      &:hover ul.sub-list {
        visibility: visible;
        display: block;
        padding-top: 40px;
        opacity: 1;
      }

      ul.sub-list {
        padding-top: 20px;
        position: absolute;
        transition: all .2s linear;
        visibility: hidden;
        opacity: 0;
        z-index: 2;

        li {
          margin: 5px 0;
          padding: 5px 0;
          cursor: pointer;
          line-height: 2em;
        }
      }

      a {
        font-weight: 600;

      }

    }

  }
}

.head-screen {
  position: fixed;
  width: 100%;
  height: 400px;
  background-color: white;
  z-index: 1;
}

.touming {
  background-color: transparent;
  .menu-list{
    a{
      color: white;
    }
  }
}
.white{
  background-color: white;
  .menu-list{
    a{
      color: #333;
    }
  }
}
.hidden{
  top: -80px!important;
}

.growY-enter-active, .growY-leave-active {
  transition: all .5s;
}

.growY-enter, .growY-leave-to {
  height: 0;
  opacity: 0.5;

}


</style>
