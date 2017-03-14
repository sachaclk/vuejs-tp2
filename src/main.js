// On importe Vue
import Vue from 'vue'

// On importe axios
import axios from 'axios'

// On importe les composants VUe
import App from './components/App.vue'
import Home from './components/Home/Home.vue'
import Post from './components/Post/Post.vue'
import Maker from './components/Maker/Maker.vue'

//on importe le routeur de Vue
import VueRouter from 'vue-router'


// On configure axios
const token = 'aab605d9ffcaae9545e0130bca670c715cfa3a709f4a6dd19fef5a72763e88e4'
axios.defaults.baseURL = 'https://api.producthunt.com/v1/'
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

//on utilise Vue Routeur
Vue.use(VueRouter)

//on configure nos routes
const routes = [
  {
    path: '/', 
    component: Home, 
    name: 'home_component'
  },
  {
    path: '/posts/:postId', 
    component: Post,
    name: 'post_component'
  },
  {
    path: '/makers/:makerId',
    component: Maker,
    name: 'maker_component'
  }
]

//on initialise le routeur
const router = new VueRouter({
  routes
})


// On initialise l'application
new Vue({
  el:'#app',
  template: '<App/>',
  components: { App },
  router
})