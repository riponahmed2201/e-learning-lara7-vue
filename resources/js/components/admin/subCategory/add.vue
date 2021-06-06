<template>
  <div>
       <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-10 offset-md-1">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Add Subcategory</h3>
                <div class="float-right">
                   <router-link to="/subcategory" class="btn btn-sm btn-outline-success"><i class="fa fa-table"></i> Subcategory List</router-link>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <form @submit.prevent="subCategorySave">
                    <div class="card-body">
                        <div class="form-group">
                            <label for="subcat_name">Select category</label>
                            <select class="form-control" name="cat_id" :class="{ 'is-invalid': form.errors.has('cat_id') }">
                                <option value="">----Please select----</option>
                                <option value="category.id" v-for="category in getCategoryList" :key="category.id">{{category.cat_name}}</option>
                            </select>

                            <has-error :form="form" field="cat_id"></has-error>
                        </div>

                        <div class="form-group">
                            <label for="subcat_name">Subcategory Name</label>
                            <input type="text" class="form-control" v-model="form.subcat_name" name="subcat_name"
                            placeholder="Enter name"
                            :class="{ 'is-invalid': form.errors.has('subcat_name') }">
                            <has-error :form="form" field="subcat_name"></has-error>
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
 name:'sub-category-add',
  data () {
    return {
      // Create a new form instance
      form: new Form({
        subcat_name: '',
        cat_id:''
      })
    }
  },

   mounted() {
        this.$store.dispatch('getCategoryList');
    },
    computed:{
        getCategoryList(){
           return this.$store.getters.categoryList
        }
    },

  methods: {
    subCategorySave () {
      // Submit the form via a POST request
      this.form.post('/subCategorySave')
        .then((data) => {
           this.$router.push('/category');
             Toast.fire({
                icon: 'success',
                title: 'Subcategory successfully saved.'
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
