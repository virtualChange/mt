<template>
  <div class="home-page">
    <el-row>
      <el-col :span="5">
        <my-menu />
      </el-col>
      <el-col :span="19">
        <life />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <container :nav="iStyle" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <container :nav="recomment" />
      </el-col>
    </el-row>
    <change-city />
  </div>
</template>

<script>
import myMenu from './menu'
import life from './life'
import container from './container'
import changeCity from '@/components/comfirm/changeCity.vue'
export default {
  components: {
    myMenu,
    life,
    container,
    changeCity
  },
  data () {
    return {
      iStyle: {
        class: 'istyle',
        title: '有格调',
        list: [
          {
            text: '全部',
            tab: 'all'
          },
          {
            text: '约会聚餐',
            tab: 'food'
          },
          {
            text: '丽人SPA',
            tab: 'spa'
          },
          {
            text: '电影演出',
            tab: 'movie'
          },
          {
            text: '品质出游',
            tab: 'travel'
          }
        ]
      },
      recomment: {
        class: 'youhui',
        title: '很优惠',
        list: [
          {
            text: '全部',
            tab: 'all'
          },
          {
            text: '美食',
            tab: 'food'
          },
          {
            text: '休闲',
            tab: 'xiuxian'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/css/public/homePage";
</style>
