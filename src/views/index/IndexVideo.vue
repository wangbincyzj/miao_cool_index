<template>
  <div class="video-wrapper">
    <video playsinline loop autoplay muted src="https://www.tencent.com/video/index-video.mp4"></video>
  </div>
</template>

<script>
export default {
  name: "IndexVideo"
}
</script>

<style scoped lang="scss">
.video-wrapper {
  width: 100%;

  video {
    width: 100%;
  }
}
</style>
