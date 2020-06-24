var r = require.context('./pages', true, /.vue/)
var arr = []

r.keys().forEach(key => {
  // console.log(key)
  var __key = key.split('.')
  // console.log(__key)
  if (__key.indexOf('index') !== -1) {
    arr.push({
      path: __key[1],
      component: r(key).default
    })
  } else {
    arr.push({
      path: __key[1] + '/' + __key[2],
      component: r(key).default
    })
  }
})
// console.log(arr)
export default arr
