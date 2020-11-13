<template>
  <div class="detail">
    <crumbs />
    <div class="commodity">
      <div class="left">
        <div class="header">
          <div class="" v-if="describe">
            <h3>
              {{ describe.title }}
              <span>
                <b></b>
                食品安全档案
              </span>
            </h3>
            <div class="score-box">
              <div class="cont">
                <ul class="icon">
                  <li v-for="item in 5" :key="item">
                    <i class="el-icon-star-on"></i>
                  </li>
                </ul>
                <ul class="icon-linght" :style="contWidth">
                  <li v-for="item in 5" :key="item">
                    <i class="el-icon-star-on"></i>
                  </li>
                </ul>
              </div>
              <span class="score"
                >{{ describe.score }}分人均￥{{ describe.avgPrice }}</span
              >
            </div>
          </div>
        </div>
        <div class="address">
          <p>地址: {{ describe.address }} <i></i></p>
          <p>电话: {{ describe.phone }}</p>
          <p>营业时间：{{ describe.businessTime }}</p>
        </div>
        <ul
          class="provide"
          v-for="(item, index) in describe.service"
          :key="index"
        >
          <li>
            <img
              src="https://p0.meituan.net/codeman/551290739062eda37e52999e2315f50c1887.png"
              alt=""
            />
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="right">
        <div class="logo">
          <img :src="describe.imgUrl" alt="" />
        </div>
        <div class="other">
          <img
            src="https://p0.meituan.net/deal/c569f2c914a96874e6006e9da690399d113154.jpg@92w_50h_1e_1c"
            alt=""
          />
          <img
            src="https://p0.meituan.net/deal/e59ec59a8e019dd1a5375247f7ee275c154703.jpg@92w_50h_1e_1c"
            alt=""
          />
          <img
            src="https://p1.meituan.net/deal/a392e08762118163fb91bc75b3f8d97a365730.jpg@92w_50h_1e_1c"
            alt=""
          />
          <img
            src="https://p0.meituan.net/deal/f8a0704f2e8bf0d004cd8193357976f4246369.jpg@92w_50h_1e_1c"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import crumbs from '@/components/detail/crumbs'
export default {
  props: ['describe'],
  components: {
    crumbs
  },
  computed: {
    contWidth () {
      const width = (80 / 5) * this.describe.cont + 'px'
      return {
        width
      }
    }
  }
}
</script>
