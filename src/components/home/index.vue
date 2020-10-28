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
      <container />
    </el-row>
  </div>
</template>

<script>
import myMenu from './menu'
import life from './life'
import container from './container'

export default {
  components: {
    myMenu,
    life,
    container
  }
}
</script>

<style lang="scss">
@import "@/assets/css/public/homePage";
</style>
