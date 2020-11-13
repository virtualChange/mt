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
import mHeader from '@/components/detail/header.vue'
import discounts from '@/components/detail/discounts.vue'
import recommend from '@/components/detail/recommend.vue'
import comment from '@/components/detail/comment.vue'
import guess from '@/components/guessLike/index.vue'
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
