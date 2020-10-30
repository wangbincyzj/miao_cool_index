<template>
  <div class="index">
    <div style="position:fixed; right: 10px;top:40%;"><button  style="color:red;font-size: 20px;">在线客服</button></div>
    <Mywin/>
    <IndexVideo/>
    
  </div>
</template>

<script>
import IndexVideo from "@/views/index/IndexVideo";
import Mywin from "@/components/dialog/Mywin"
export default {
  name: "Index",
  components: {IndexVideo,Mywin},
  methods: {

  }
}
</script>

<style scoped lang="scss">
.index{
  width: 100%;
}
</style>
