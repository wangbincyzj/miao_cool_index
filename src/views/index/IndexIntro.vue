<template>
  <div class="index-introduce container">
    <div class="text col">
      <span>喵酷网络科技有限公司是一家什么什么什么我</span>
      <span>喵酷网络科技有限公司是一家什么什么什</span>
    </div>
    <div class="box-wrapper row">
      <div class="box">
        <div class="label">P</div>
        <div class="text-area col">
          <div class="rich-text">
            <span class="title">专业平台</span>
            <span class="word">/Professional</span>
          </div>
          <div class="abc">专业的平台为您提供专业的定制方案</div>
        </div>
      </div>
      <div class="box">
        <div class="box">
          <div class="label">A</div>
          <div class="text-area col">
            <div class="rich-text">
              <span class="title">完美售后</span>
              <span class="word">/After-sales</span>
            </div>
            <div class="abc">专业的平台为您提供专业的定制方案</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "IndexIntro"
}
</script>

<style scoped lang="scss">
  .text{
    height: 222px;
    font-size: 22px;
    color: #444;
    padding: 80px 0 60px;
    justify-content: space-between;
  }
  .box-wrapper{
    justify-content: space-between;
    .box{
      height: 220px;
      width: 590px;
      background: #F7F8FA;
      position: relative;
      .label{
        color: #3783FF;
        position: absolute;
        left: 83px;
        font-size: 40px;
        top: 90px;

      }
      .text-area{
        position: absolute;
        justify-content: space-between;
        height: 72px;
        left: 139px;
        top: 50%;
        transform: translateY(-50%);
        .rich-text{
          width: 100%;
          .title{
            font-size: 20px;
            font-weight: 600;
            color: #222222;
            margin-right: 5px;
          }
          .word{
            font-size: 20px;
            font-weight: 600;
            color: #767676;
          }
        }
        .abc{
          font-size: 14px;
          font-weight: 400;
          color: #444444;
        }
      }
    }
  }
</style>
