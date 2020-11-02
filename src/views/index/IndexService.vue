<template>
  <div class="service container">
    <div class="title">
      <span>我们提供的服务</span>
      <span>- SERVICE</span>
    </div>
    <div class="content-wrapper row">
      <ul class="nav">
        <li
            v-for="(item,index) in navList"
            :key="item.label"
            :class="{active: index===activeIndex}"
            @mouseenter="activeIndex=index"
        >{{item.label}}
        </li>
      </ul>
      <div class="content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexService",
  data() {
    return {
      activeIndex: 0,
      navList: [
        {label: "高端网站建设", url: ""},
        {label: "APP开发设计", url: ""},
        {label: "微信小程序开发", url: ""},
        {label: "品牌设计", url: ""},
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.service {
  height: 580px;

  .title {
    padding-top: 80px;
    text-align: center;
    height: 160px;
    font-size: 28px;
    font-weight: 600;

    span:nth-child(1) {
      color: #222222;
      margin-right: 3px;
    }

    span:nth-child(2) {
      color: #767676;
    }
  }

  .content-wrapper {
    height: 420px;

    .nav {
      flex: 1;
      height: 100%;
      font-size: 26px;
      font-weight: 600;

      li {
        margin-bottom: 68px;
        color: #999999;
        cursor: pointer;
        transition: all 0.5s;
        &.active {
          color: #222222;
          padding-left: 24px;
          border-left: #3783FF 10px solid;
        }
      }
    }

    .content {
      width: 938px;
      background-color: #222222;
      height: 100%;
    }
  }
}
</style>
