import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // render: h => h(App), // 아래 표현식을 줄인것이다.
  render: function(createElement) {
    return createElement(App);
  }
}).$mount('#app')
