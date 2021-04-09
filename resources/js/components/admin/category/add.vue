<template>
  <div>
       <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-10 offset-md-1">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Add Category</h3>
                <div class="float-right">
                   <router-link to="/category" class="btn btn-sm btn-outline-success"><i class="fa fa-table"></i>Category List</router-link>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <form @submit.prevent="categorySave">
                    <div class="card-body">
                    <div class="form-group">
                        <label for="cat_name">Category Name</label>
                        <input type="text" class="form-control" v-model="form.cat_name" name="cat_name"
                          placeholder="Enter caetgory name"
                          :class="{ 'is-invalid': form.errors.has('cat_name') }">
                        <has-error :form="form" field="cat_name"></has-error>
                    </div>
                    </div>
                    <div class="card-footer">
                        <button type="submit" class="btn btn-primary">Submit</button>
                        <button type="submit" @click="goBack" class="btn btn-danger float-right">Back</button>
                    </div>
                </form>
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
 name:'category-add',
  data () {
    return {
      // Create a new form instance
      form: new Form({
        cat_name: '',
      })
    }
  },

  methods: {
    categorySave () {
      // Submit the form via a POST request
      this.form.post('/categorySave')
        .then((data) => { 
           this.$router.push('/category');
             Toast.fire({
                icon: 'success',
                title: 'Category successfully saved.'
            })
        }).catch(() =>{

        });
    },

    goBack(){
         this.$router.push('/category');
    }
  }
}
</script>

<style>

</style>