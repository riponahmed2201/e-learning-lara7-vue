
import dashboard from './components/admin/dashboard/index.vue'
import categoryList from './components/admin/category/list.vue'
import categoryAdd from './components/admin/category/add.vue'
import categoryEdit from './components/admin/category/edit.vue'


export const routes = [
    {
        path: '/',
        component: dashboard
    },

    { path: '/category', component: categoryList },
    { path: '/add_category', component: categoryAdd },
    { path: '/edit_category/:categoryId', component: categoryEdit },
]
