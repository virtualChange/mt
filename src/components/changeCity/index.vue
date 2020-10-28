<template>
  <div class="page-city">
    <province class="line" />
    <div class="hot line">
      <h2>热门城市:</h2>
      <span>北京</span>
      <span>上海</span>
      <span>广州</span>
      <span>深圳</span>
      <span>天津</span>
      <span>西安</span>
    </div>
    <div class="line lately">
      <h2>最近访问:</h2>
      <span>北京</span>
      <span>上海</span>
      <span>广州</span>
      <span>深圳</span>
      <span>天津</span>
      <span>西安</span>
    </div>
    <div class="choose">
      <h2>按拼音首字母选择:</h2>
      <a
        :href="'#city-' + en"
        v-for="en in 'ABCDEFGHIJKLMNOQRSTUVWXYZ'"
        :key="en"
        >{{ en }}</a
      >
    </div>
    <city />
  </div>
</template>

<script>
import province from '@/components/changeCity/province'
import city from '@/components/changeCity/city'
export default {
  components: {
    province,
    city
  }
}
</script>

<style lang="scss">
@import "@/assets/css/changeCity/page-city.scss";
</style>
