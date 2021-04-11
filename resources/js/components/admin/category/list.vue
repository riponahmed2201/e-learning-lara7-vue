<template>
  <div>
       <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-10 offset-md-1">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">All Category List</h3>
                <div class="float-right">
                   <router-link to="/add_category" class="btn btn-sm btn-outline-success"><i class="fa fa-plus"></i> Add New</router-link>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th style="width: 10px">#</th>
                      <th>Category Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(categoryList, index) in getCategoryList" :key="categoryList.id">
                      <td>{{index + 1}}</td>
                      <td>{{categoryList.cat_name}}</td>
                      <td>
                        <div>
                         <router-link to=""> <i class="fa fa-edit text-info"></i> </router-link>
                          <router-link to=""> <i class="fa fa-trash-alt text-danger"></i> </router-link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
              <div class="card-footer clearfix">
                <ul class="pagination pagination-sm m-0 float-right">
                  <li class="page-item"><a class="page-link" href="#">&laquo;</a></li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item"><a class="page-link" href="#">&raquo;</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>
  </div>
</template>

<script>
export default {
    name:'category-list',

    mounted() {
        this.$store.dispatch('getCategoryList');
    },
    computed:{
        getCategoryList(){
           return this.$store.getters.categoryList
        }
    }
}
</script>

<style>

</style>
