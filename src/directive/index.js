import Vue from 'vue'
Vue.directive('focus', (el, binding, vnode) => {
  const {
    expression
  } = binding
  const {
    context
  } = vnode
  document.addEventListener('click', (e) => {
    // console.log(e.target, el)
    if (el.contains(e.target)) {
      context[expression] = true
    } else {
      context[expression] = false
    }
  }, false)
  // document.onclick = (e) => {
  //   console.log(e.target, el)
  //   if (el.contains(e.target)) {
  //     context[expression] = true
  //   } else {
  //     context[expression] = false
  //   }
  // }
})
