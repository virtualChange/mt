<template>
  <el-container class="layout-default">
    <el-header height="">
      <my-header />
    </el-header>
    <el-main>
    </el-main>
    <el-footer height="">
    </el-footer>
  </el-container>
</template>
<script>
import myHeader from '@/components/header/index'
export default {
  components: {
    myHeader
  }
}
</script>

<style lang="scss">
@import '@/assets/css/public/layout'
</style>
