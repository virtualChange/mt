import Vue from 'vue'
import store from '@/store'
const address = store.state.address

const s = document.createElement('script')
s.src = 'http://pv.sohu.com/cityjson.js'
document.head.append(s)
s.onload = function () {
  const ip = window.returnCitySN.cip
  const loca = localStorage.getItem('address')
  if (loca) {
    store.commit('address', loca)
  } else {
    Vue.prototype.axios.get(`/location/ip?ak=DV0ogDzeywCUpOKp7n27tA9Z781K2OkL&ip=${ip}&coor=bd09ll`).then(res => {
      const now = res.address.split('|')[2]
      if (now !== address) {
        const result = window.confirm(`当前位置${now},是否切换`)
        if (result) {
          store.commit('address', now)
          localStorage.setItem('address', now)
        }
      }
    })
  }
  // eslint-disable-next-line no-undef

  // Vue.prototype.axios.get('/cityjson').then(res => {
  //   const ip = res.match(/((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}/g)
  //   Vue.prototype.axios.get(`/location/ip?ak=DV0ogDzeywCUpOKp7n27tA9Z781K2OkL&ip=${ip[0]}&coor=bd09ll`).then(res => {
  //     const now = res.address.split('|')[2]
  //     if (now !== address) {
  //       const result = window.confirm(`当前位置${now},是否切换`)
  //       if (result) {
  //         store.commit('address', now)
  //         localStorage.setItem('address', now)
  //       }
  //     }
  //   })
  // })
}
