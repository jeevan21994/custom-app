<template>
    <div id="ProductAdd">

      <div class="container">
          <div class="row">
            <div class="col-sm-3 col-md-3"></div>
            <div class="col-sm-6 col-md-6">
                <div class="container">
                    <h2>Product Add</h2>
                   
<form @submit.prevent="onsubmit">
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" class="form-control"  v-model="name" placeholder="Enter name" id="name">
    </div>
    <div class="form-group">
      <label for="age">Age:</label>
      <input type="text" class="form-control" v-model="age" placeholder="Enter age" id="age">
    </div>
   
    <button type="submit" class="btn btn-primary mr-2" value="submit">Submit</button>
    <!-- <button type="button" class="btn btn-danger ml-3"  v-on:click="$router.go(-1)">Cencel</button> -->
  <button type="button"> <router-link :to="{name : 'productlist' }">Cencel</router-link></button>
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
                name:"",
                age:"",
            }
        },
        methods:{
        ...mapActions(["addProduct"]),
          onsubmit : function(){
              console.log(this.name,this.age)
           this.addProduct({
                name :this.name,
                age:this.age
            })
            this.$router.replace("/productlist")
          },
        }
    }
</script>

