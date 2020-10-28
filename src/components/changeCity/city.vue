<template>
  <div class="city">
    <div
      class="city-classify"
      v-for="city in cityList"
      :key="city.start"
      :id="'city-' + city.start"
    >
      <dl>
        <dt class="start">{{ city.start }}</dt>
          <dd v-for="(item, index) in city.city" :key="index">
            {{ item }}
          </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cityList: [
        {
          start: 'A',
          city: [
            '山东',
            '山东',
            '甘肃',
            '山东',
            '甘肃',
            '江苏',
            '北京',
            '云南',
            '山东',
            '山东',
            '甘肃'
          ]
        },
        {
          start: 'B',
          city: [
            '山东',
            '山东',
            '甘肃',
            '山东',
            '甘肃',
            '江苏',
            '北京',
            '云南',
            '山东',
            '山东',
            '甘肃'
          ]
        },
        {
          start: 'C',
          city: [
            '山东',
            '山东',
            '甘肃',
            '山东',
            '甘肃',
            '江苏',
            '北京',
            '云南',
            '山东',
            '山东',
            '山东',
            '甘肃',
            '山东',
            '甘肃',
            '江苏',
            '北京',
            '云南',
            '山东',
            '山东',
            '山东',
            '甘肃',
            '山东',
            '甘肃',
            '江苏',
            '北京',
            '云南',
            '山东',
            '山东',
            '甘肃'
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/css/changeCity/city.scss";
</style>
