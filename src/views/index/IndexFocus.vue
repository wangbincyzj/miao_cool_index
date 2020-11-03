<template>
  <div class="index-focus">
    <div class="focus-title">
      <span>您最关注的</span>
      <span>- FAQ</span>
    </div>
    <div class="content-wrapper col container">
      <div class="line1 row">
        <div class="img-wrapper">
          <img src="https://s1.ax1x.com/2020/11/02/BrJQZ6.png" alt="">
        </div>
        <div class="box box-1">
          <div class="title">网站建设周期需要多久？</div>
          <div class="content">根据我们多年网站建设的经验，一般做个企业官网，周期为10-15个工作日，含双方 沟通确认时间，如我司设计人员出了设计图之后，贵司迟迟不反馈或者反馈不及时，
            就会导致时间加长，程序时间算是固定的，确认网站设计图后，企业官网程序时间 一般为3-5个工作日。针对于大型平台开发的周期这个需要知道详细要求与所需要开 发的功能后，技术部可出详细报价单与工时。
          </div>
        </div>
      </div>
      <div class="line2 row">
        <div class="box box-2" v-for="item in 3">
          <div class="title">外地企业怎么与贵公司合作？</div>
          <div class="content">通过线上QQ/微信沟通即可解决，本地客户一般也只是签合同时上门，至于项目制作过程中也都是线上沟通的。对于这点，无需担心，毕竟最终验收还是需要贵司签字确认回传文件为准。</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexFocus"
}
</script>

<style scoped lang="scss">
.index-focus {
  .focus-title {
    height: 160px;
    padding-top: 79px;
    text-align: center;

    span:nth-child(1) {
      font-size: 28px;
      font-weight: 600;
      color: #222222;
      line-height: 40px;
    }

    span:nth-child(2) {
      font-size: 28px;
      font-weight: 600;
      color: #767676;
      line-height: 40px;
    }
  }

  .content-wrapper {
    .img-wrapper {
      width: 590px;
      height: 290px;
      img {
        width: 100%;
      }
    }


  }
}
.line2{
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
}
.box {
  background: #F7F8FA;


  .title {
    font-size: 18px;
    font-weight: 600;
    color: #222222;
    line-height: 25px;
  }

  .content {
    font-size: 14px;
    font-weight: 400;
    color: #767676;
    line-height: 22px;
  }
}

.box-1 {
  width: 610px;
  height: 290px;
  padding: 50px 40px;
  .title{
    margin-bottom: 20px;
  }
}

.box-2 {
  width: 386px;
  height: 189px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}
</style>
