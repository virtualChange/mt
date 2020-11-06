<template>
  <el-breadcrumb separator-class="el-icon-arrow-right" class="crumb">
    <el-breadcrumb-item :to="{ path: '/' }"
      >{{ address }}美团</el-breadcrumb-item
    >
    <el-breadcrumb-item>{{ $route.params.name}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['address'])
  }
}
</script>
