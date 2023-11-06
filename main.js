import Vue from 'vue';
import Vuetify from 'vuetify';
import '@mdi/font/css/materialdesignicons.css';
import App from './App.vue';

Vue.use(Vuetify);

new Vue({
  render: h => h(App),
}).$mount('#app');

export default new Vuetify({
  icons: {
    iconfont: 'mdi', // Ensure this is set to 'mdi' for Material Design Icons
  },
});
