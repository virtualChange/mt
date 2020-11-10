<template>
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
</template>

<script>
export default {
  props: ['score'],
  computed: {
    contWidth () {
      const width = (80 / 5) * this.score + 'px'
      return {
        width
      }
    }
  }
}
</script>
