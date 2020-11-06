<template>
  <div class="good-list">
    <el-row>
      <crumb />
    </el-row>
    <el-row>
      <m-nav />
    </el-row>
  </div>
</template>

<script>
import crumb from '@/components/goodList/crumb'
import mNav from '@/components/goodList/nav'
export default {
  components: {
    crumb,
    mNav
  }
}
</script>

<style lang="scss">
@import '@/assets/css/goodList/index.scss'
</style>
