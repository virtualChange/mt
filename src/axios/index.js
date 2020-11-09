import Vue from 'vue'
import axios from 'axios'
// axios.defaults.baseURL = 'http://open.duyiedu.com'
axios.interceptors.response.use(response => {
  // 对响应数据做点什么
  if (response.config.url === '/api/meituan/login' || response.config.url === '/api/meituan/register') {
    return response.data
  }
  if (response.status === 200) {
    if (!response.data.data) {
      return response.data
    }
    return response.data.data
  }
  return response
})
Vue.prototype.axios = axios
