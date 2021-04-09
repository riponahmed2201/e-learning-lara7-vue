
import dashboard from './components/admin/dashboard/index.vue'
import categoryList from './components/admin/category/list.vue'
import categoryAdd from './components/admin/category/add.vue'


export const routes = [
    {
        path: '/',
        component: dashboard 
    },

    { path: '/category', component: categoryList },
    { path: '/add_category', component: categoryAdd },
]
