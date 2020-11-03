<template>
  <div class="aboutUs container-fluid">
    <div class="container content-wrapper">
      <div class="img-wrapper">
        <img src="https://s1.ax1x.com/2020/11/02/BrJKqx.png" alt="">
      </div>
      <div class="content col">
        <div class="title">
          <span>关于我们</span>
          <span>- ABOUT</span>
        </div>
        <div class="detail">***市***才气公司位于***市我读书处说的话，是一家专门从事装修建材及装饰产品销售和服务的民营企业，成立于二零零三年六月。主要经营产品为建筑陶瓷、砂岩、马赛克、饰品等及辅助材料。公司
          运行专卖店4家，经营面积。住要谁护士速度加速好吃的好吃的好吃多了好吃的就来吃的就是吃了仨 u 活动流程合理的萨草闪亮登场时的好处就是到处乱说的哈吃。
        </div>
        <ul class="number row">
          <li class="item col" v-for="item in meta">
            <div class="row">
              <span>{{item.value}}</span>
              <span>{{item.unit}}</span>
            </div>
            <div class="desc">{{item.desc}}</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="more col">More</div>
  </div>
</template>

<script>
export default {
  name: "IndexAboutUs",
  data() {
    return{
      meta: [
        {value: "8+", unit: "年", desc: "服务经验"},
        {value: "200+", unit: "家", desc: "合作案例"},
        {value: "380", unit: "项", desc: "细节标准"},
        {value: "24", unit: "时", desc: "全天服务"},
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.aboutUs {
  margin-top: 213px;
  height: 464px;
  background-color: #EBF2FF;

  .content-wrapper {
    position: relative;
    height: 100%;

    .img-wrapper {
      position: absolute;
      left: 0;
      bottom: 0;
    }

    .content {
      margin-left: 477px;
      height: 100%;
      div.title{
        font-size: 28px;
        font-weight: 600;
        color: #222;
        margin-top: 40px;
        span:nth-child(2){
          color: #767676;
        }
      }
      div.detail{
        margin-top: 40px;
        font-size: 14px;
        font-weight: 400;
        color: #767676;
        line-height: 30px;
      }
      ul.number{
        width: 100%;
        justify-content: space-between;
        li{
          span:nth-child(1){
            font-size: 32px;
            font-weight: 600;
            color: #3783FF;
            line-height: 33px;
            margin-right: 3px;
          }
          span:nth-child(2){
            font-size: 20px;
            font-weight: 400;
            color: #767676;
            line-height: 28px;
          }
          .desc{
            font-size: 18px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #767676;
            line-height: 25px;
          }
        }
      }
    }
  }
  .more{
    height: 64px;
    background-color: #3783FF;
    line-height: 64px;

    font-size: 20px;
    font-weight: 600;
    color: #FFFFFF;
  }
}
</style>
