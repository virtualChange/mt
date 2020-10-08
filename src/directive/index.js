import Vue from 'vue'
Vue.directive('focus', (el, binding, vnode) => {
  const { expression } = binding
  const { context } = vnode
  document.onclick = (e) => {
    console.log(el.contains(e.target))
    if (el.contains(e.target)) {
      context[expression] = true
    } else {
      context[expression] = false
    }
  }
})
