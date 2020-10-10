import Vue from 'vue'
import axios from 'axios'
axios.defaults.baseURL = 'http://open.duyiedu.com'
axios.interceptors.response.use(response => {
  // 对响应数据做点什么
  if (response.status === 200) {
    return response.data.data
  }
  return response
})
Vue.prototype.axios = axios
