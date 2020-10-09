import Vue from 'vue'
Vue.directive('focus', (el, binding, vnode) => {
  const { expression } = binding
  const { context } = vnode
  document.onclick = (e) => {
    if (el.contains(e.target)) {
      context[expression] = true
    } else {
      context[expression] = false
    }
  }
})
