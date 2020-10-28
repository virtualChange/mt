<template>
  <div class="slider">
    <div class="block">
      <el-carousel height="240px" width="500px">
        <el-carousel-item v-for="img in imgList" :key="img">
          <h3 class="small">
            <img :src="img" alt="" />
          </h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgList: [
        'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg',
        'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png',
        'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg'
      ]
    }
  }
}
</script>
