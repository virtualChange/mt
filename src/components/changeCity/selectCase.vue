<template>
  <div class="select-case" v-focus="show">
    <div class="case-show" @click="show = true">
      <span class="value">{{ value }}</span>
      <span class="el-icon-caret-bottom"></span>
    </div>
    <dl class="show-select" v-if="show">
      <div class="arrow"></div>
      <dt class="title">{{ title }}</dt>
      <div class="column-box">
        <dd
          class="column"
          v-for="(column, index) in columnList"
          :key="index"
          @click="click"
        >
          <span v-for="(item, i) in column" :key="i">{{ item }}</span>
        </dd>
      </div>
    </dl>
  </div>
</template>

<script>
export default {
  props: ['title', 'list', 'value'],
  data () {
    return {
      show: false
    }
  },
  methods: {
    click (e) {
      const target = e.target
      if (target.nodeName !== 'SPAN') {
        return
      }
      this.show = false
      this.$emit('chooseClick', target.innerText)
    }
  },
  computed: {
    columnList () {
      let start = 0
      const num = 14
      const arr = []
      while (start <= this.list.length) {
        arr.push(this.list.slice(start, start + num))
        start += num
      }
      return arr
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/css/changeCity/selectCase.scss";
</style>
