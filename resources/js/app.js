
require('./bootstrap');

window.Vue = require('vue');


// vue router suppoort
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import {routes} from './routes'

const router = new VueRouter({
    routes // short for `routes: routes`
})

//v-form support
import { Form, HasError, AlertError } from 'vform'

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
window.Form = Form; //  for global use


// sweet alert2 support 
import Swal from 'sweetalert2'
window.Swal = Swal;

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  window.Toast = Toast;

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin-master', require('./components/admin/adminMaster.vue').default);

const app = new Vue({
    el: '#app',
    router
});
