<template>
  <div class="index">
    <IndexBanner/>
    <IndexIntro/>
    <IndexService/>
    <IndexAboutUs/>
    <IndexFocus/>
    <IndexAd/>
    <IndexFooter/>
  </div>
</template>

<script>
import Mywin from "@/components/dialog/Mywin"
import IndexBanner from "@/views/index/IndexBanner";
import IndexIntro from "@/views/index/IndexIntro";
import IndexService from "@/views/index/IndexService";
import IndexAboutUs from "@/views/index/IndexAboutUs";
import IndexFocus from "@/views/index/IndexFocus";
import IndexAd from "@/views/index/IndexAd";
import IndexFooter from "@/views/index/IndexFooter";

export default {
  name: "Index",
  components: {IndexFooter, IndexAd, IndexFocus, IndexAboutUs, IndexService, IndexIntro, IndexBanner, Mywin},
  methods: {}
}
</script>

<style scoped lang="scss">
.index {
  width: 100%;
}
</style>
