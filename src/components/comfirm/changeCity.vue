<template>
  <el-button
    type="text"
    @click="open"
    class="confirm-change-city"
    style="display: none"
    >点击打开 Message Box</el-button
  >
</template>

<script>
import Vue from 'vue'
import store from '@/store'
export default {
  data () {
    return {
      address: ''
    }
  },
  methods: {
    open (address) {
      this.$confirm(`当前位置${address},是否切换`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '切换成功!'
          })
          this.change(address)
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          })
        })
    },
    change (address) {
      this.$store.commit('address', address)
      sessionStorage.setItem('address', address)
    },
    getLocation () {
      const loca = sessionStorage.getItem('address')
      if (loca) {
        // 当前位置已经存在
        store.commit('address', loca)
        return
      }
      const address = store.state.address
      const self = this
      const s = document.createElement('script')
      s.src = 'http://pv.sohu.com/cityjson.js'
      document.head.append(s)
      s.onload = function () {
        const ip = window.returnCitySN.cip
        Vue.prototype.axios
          .get(
            `/location/ip?ak=DV0ogDzeywCUpOKp7n27tA9Z781K2OkL&ip=${ip}&coor=bd09ll`
          )
          .then((res) => {
            const now = res.address.split('|')[2]
            if (now !== address) {
              self.open(now)
            }
          })
      }
    }
  },
  created () {
    this.getLocation()
  }
}
</script>
