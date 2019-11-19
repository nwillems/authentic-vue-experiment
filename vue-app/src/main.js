import Vue from 'vue'
import Router from 'vue-router'

import App from './App.vue'
import Login from '@/components/Login'
import HelloWorld from '@/components/HelloWorld'
import Signup from '@/components/Signup'
import Confirm from '@/components/Confirm'
import Protected from '@/components/Protected'

Vue.config.productionTip = false
Vue.use(Router);

let router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: "HelloWorld", component: HelloWorld },
    { path: '/login', name: "Login", component: Login },
    { path: '/signup', name: "Signup", component: Signup },
    { path: '/confirm', name: "confirm", component: Confirm },
    { path: '/protected', name: "Protected", component: Protected, meta: { authenticated: true} },
  ]
});

var authenticClient = require('authentic-client')

var auth = authenticClient({
  server: 'http://localhost:1337',
  authToken: window.localStorage.authToken
})

var authPlugin = {
  install: function(Vue, options) {
    Vue.prototype.isLoggedIn = function(){
      return !!options.auth.authToken;
    }
    Vue.prototype.$auth = options.auth
  }
}

function authenticationGuard(to, from, next){
  if(to.matched.some((r) => r.meta.authenticated) && !auth.authToken) {
    next('/login')
  } else {
    next();
  }
}

Vue.use(authPlugin, {auth});
router.beforeEach(authenticationGuard)

const app = new Vue({
  render: h => h(App),
  router
}).$mount('#app')

window.console.log(app)
