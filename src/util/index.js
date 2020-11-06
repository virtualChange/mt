import Vue from 'vue'
const util = {
  throttle (fn, delay) {
    let timer = null
    return function () {
      clearInterval(timer)
      timer = setTimeout(() => {
        fn.apply(this, arguments)
      }, delay)
    }
  },
  /**
   * 函数防抖 在delay时间内只执行一次
   * @param {*} fn
   * @param {*} delay
   */
  shake (fn, delay) {
    let timer = null
    return function () {
      if (!timer) {
        timer = setTimeout(() => {
          fn.apply(this, arguments)
          timer = null
        }, delay)
      }
    }
  }
}
Vue.prototype.util = util
