
import dashboard from './components/admin/dashboard/index.vue'

//import component for category
import categoryList from './components/admin/category/list.vue'
import categoryAdd from './components/admin/category/add.vue'
import categoryEdit from './components/admin/category/edit.vue'

//import component for subcategory
import subCategoryList from './components/admin/subCategory/list.vue'
import subCategoryAdd from './components/admin/subCategory/add.vue'
import subCategoryEdit from './components/admin/subCategory/edit.vue'



export const routes = [
    {
        path: '/',
        component: dashboard
    },

    // for category routes
    { path: '/category', component: categoryList },
    { path: '/add_category', component: categoryAdd },
    { path: '/edit_category/:categoryId', component: categoryEdit },

    //for subCategory routes
    { path: '/subcategory', component: subCategoryList },
    { path: '/addSubCategory', component: subCategoryAdd },
    { path: '/editSubCategory/:subCategoryId', component: subCategoryEdit },
]
