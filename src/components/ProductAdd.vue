<template>
  <div id="ProductAdd">

    <div class="container">
        <div class="row">
          <div class="col-sm-3 col-md-3"></div>
          <div class="col-sm-6 col-md-6">
              <div class="container">
                  <h2>Product Add</h2>
                 
<form @submit.prevent="onsubmit">
<p v-if="errors.length">
  <b>Please correct the following error(s):</b>
  <ul>
    <li v-for="error in errors" :key="error">{{ error }}</li>
  </ul>
</p>

  <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" class="form-control"  v-model="name" placeholder="Enter name" id="name">
  </div>
  <div class="form-group">
    <label for="age">Age:</label>
    <input type="text" class="form-control" v-model="age" placeholder="Enter age" id="age">
  </div>
 
  <button type="submit" class="btn btn-primary mr-2" value="submit">Submit</button>
  <button type="button" class="btn btn-danger ml-3"  v-on:click="$router.go(-1)">Cencel</button>
</form>
</div>
  </div>
          <div class="col-sm-3 col-md-3">
          </div>
        </div>
    </div>
  </div>
</template>
<script>
  import { mapActions} from "vuex"
  export default{
      name:'ProductAdd',
      data(){
          return {
            errors: [],
            name: null,
            age: null,
              // name:"",
              // age:"",
          }
      },
      methods:{
      ...mapActions(["addProduct"]),
        onsubmit : function(e){
      

          this.addProduct({
              name :this.name,
              age:this.age
          })
          this.$router.push("/productlist").catch(error => {
                 if (error.name != "NavigationDuplicated") {
                     throw error;
                  }
              });

    if (this.name && this.age) {
      return true;
    }

    this.errors = [];

    if (!this.name) {
      this.errors.push('Name required.');
    }
    if (!this.age) {
      this.errors.push('Age required.');
    }

    e.preventDefault();

        },
      }
  }
</script>

