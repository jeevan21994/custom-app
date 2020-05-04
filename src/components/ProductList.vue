<template>
  <div id="productupdate">

    <div class="container">
        <div class="row">
          <div class="col-sm-3 col-md-3"></div>
          <div class="col-sm-3 col-md-6">
              <div class="container">
                  <h2>Product Update Form</h2>
                 
<form>
  <div class="form-group">
    <label>Name:</label>
    <input type="text" class="form-control"  v-model="jsonData.name" placeholder="Enter name" >
  </div>
  <div class="form-group">
    <label>Age:</label>
    <input type="text" class="form-control" v-model="jsonData.age" placeholder="Enter age">
  </div>
 
  <button type="submit" v-on:click="saveForm" class="btn btn-primary mr-2">Update</button>
  <button type="button" class="btn btn-danger ml-3"  v-on:click="$router.go(-1)">Cencel</button>
  <!-- <button type="button"> <router-link :to="{name : 'productlist' }">Cencel</router-link></button> -->

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
  import {mapState} from "vuex"
  export default{
      name:'productupdate',
      data(){
          return {
              jsonData:{
                  name:"",
                  age:""
              },
          }
      },
      computed :{
          // getter+state both r define in computed
          ...mapState(["productListArray"]),
      
      },
      methods:{
         async saveForm(){
             this.$router.push("/productlist").catch(error => {
                 if (error.name != "NavigationDuplicated") {
                     throw error;
                  }
              });
              this.$store.dispatch('editForm',this.jsonData)
          },
      },

      created(){
              console.log(this.$route.params.id)
              var id=this.$route.params.id
              this.$http.get('http://localhost:3000/productListArray/'+ id)
              .then(function (responce){
              this.jsonData=responce.body
          })   .catch(error => {
                  console.log(error) 
              });
          },
  }
</script>

