<template>
  <div class="index">
    <IndexBanner/>
    <IndexIntro/>
    <IndexService/>
    <IndexAboutUs/>
  </div>
</template>

<script>
import Mywin from "@/components/dialog/Mywin"
import IndexBanner from "@/views/index/IndexBanner";
import IndexIntro from "@/views/index/IndexIntro";
import IndexService from "@/views/index/IndexService";
import IndexAboutUs from "@/views/index/IndexAboutUs";

export default {
  name: "Index",
  components: {IndexAboutUs, IndexService, IndexIntro, IndexBanner, Mywin},
  methods: {}
}
</script>

<style scoped lang="scss">
.index {
  width: 100%;
  padding-bottom: 500px;
}
</style>
