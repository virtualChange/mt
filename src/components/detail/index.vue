<template>
  <div class="detail-info">
    <mHeader :describe="info" />
    <el-row>
      <el-col :span="20">
        <discounts />
        <recommend :recommend="info.recommend" />
        <comment :comment="info.comment" :commentNum="info.commentNum" />
      </el-col>
      <el-col :span="4">
        <guess />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import mHeader from './header'
import discounts from './discounts'
import recommend from './recommend'
import comment from './comment'
import guess from '../guessLike'
export default {
  data () {
    return {
      info: ''
    }
  },
  components: {
    mHeader,
    discounts,
    recommend,
    comment,
    guess
  },
  created () {
    this.axios
      .get('/api/meituan/product/detail.json', {
        params: {
          appkey: 'virtual_1569514431385'
        }
      })
      .then((res) => {
        this.info = res
        console.log(res)
      })
  }
}
</script>

<style lang="scss">
@import "@/assets/css/detail";
</style>
