import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)
// var r = require.context('../components', true, /\.router\.js/)
// 三个参数   匹配 文件位置 ； true || false  是否检测子文件夹； 正则，检测那种类型的文件

var r = require.context('../components', true, /\.router\.js/)
var arr = []

r.keys().forEach(key => {
  // console.log(r(key).default)
  arr = arr.concat(r(key).default)
})
console.log(arr)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    ...arr
  ]
})
