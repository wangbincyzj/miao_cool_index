<template>
  <ul class="container row">
    <li>
      <div>喵酷网络科技有限公司</div>
      <div>电话：0792-8888888</div>
      <div>邮箱：598914396@qq.com (业务)</div>
    </li>
    <li>
      <div>支付宝账号：</div>
      <div>银行账号：0792-8888888</div>
      <div>银行开户地址：598914396@qq.com (业务)</div>
    </li>
    <li>
      <div>联系电话：</div>
      <div>027-8787686</div>
      <div>全天24小时为您服务</div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "IndexFooter"
}
</script>

<style scoped lang="scss">
  ul{
    margin: 80px auto;
    padding-top: 30px;
    li{
      position: relative;
      width: 33.3%;
      div{
        font-size: 14px;
        font-weight: 600;
        color: #767676;
        line-height: 20px;
        letter-spacing: 1px;
        margin-bottom: 12px;
      }
      &::before{
        content: "";
        position: absolute;
        left: 0;
        top: -30px;
        width: 262px;
        height: 2px;
        background-color: #979797;
      }
    }
  }
</style>
