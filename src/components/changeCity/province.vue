<template>
  <div class="province">
    <span>按省份选择:</span>
    <select-case
      :list="provinceList"
      :title="provinceTitle"
      :value="provinceValue"
      @chooseClick="provinceClick"
    />
    <select-case
    :list="cityList"
    :title="cityTitle"
    @chooseClick="cityClick"
    :value="cityValue"/>
    <div class="search" v-focus="show">
      <span>直接搜索: </span>
      <input type="text" placeholder="请输入城市中文或拼音" v-model="value" />
      <ul v-show="value && show">
        <div class="arrow"></div>
        <li v-for="(item, index) in items" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import selectCase from '@/components/changeCity/selectCase'
export default {
  data () {
    return {
      value: '',
      cityList: [
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
        '甘肃',
        '江苏',
        '北京',
        '云南',
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
        '甘肃',
        '江苏',
        '北京',
        '云南',
        '山东',
        '山东',
        '甘肃',
        '山东',
        '甘肃',
        '江苏'
      ],
      provinceList: [
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
        '甘肃',
        '江苏',
        '北京',
        '云南',
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
        '甘肃',
        '江苏',
        '北京',
        '云南',
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
        '甘肃',
        '江苏',
        '北京',
        '云南',
        '山东',
        '山东',
        '甘肃',
        '江苏',
        '北京',
        '云南',
        '山东',
        '山东'
      ],
      cityTitle: '城市',
      provinceTitle: '省份',
      items: [
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
        '甘肃',
        '江苏',
        '北京',
        '云南',
        '山东',
        '山东',
        '甘肃'
      ],
      show: false,
      provinceValue: '省份',
      cityValue: '城市'
    }
  },
  methods: {
    provinceClick (e) {
      this.provinceValue = e
    },
    cityClick (e) {
      this.cityValue = e
    }
  },
  components: {
    selectCase
  }
}
</script>

<style lang="scss">
@import "@/assets/css/changeCity/province.scss";
</style>
