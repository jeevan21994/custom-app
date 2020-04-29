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
    <!-- <button type="submit" class="btn btn-primary mr-2" value="submit">Update</button> -->
    <!-- <button type="button" class="btn btn-danger ml-3" v-on:click="cencel">Cencel</button> -->
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
    import {mapState} from "vuex"
    export default{
        name:'productupdate',
        data(){
            return {
                jsonData:{
                    name:'',
                    age:''
                }
            }
        },
        computed :{
            ...mapState(["productListArray"]),
        //  update(){
        //      return this.productListArray.find(v=>v.id == this.$route.params.id);
        //  }
        },
        methods:{
           async saveForm(){
              await this.$store.dispatch('editForm',this.jsonData)
                    // this.$router.replace({name:'productlist'})
                    this.$router.push('/productlist')

            },
            // cencel:function(){
            //     this.$route.push({name:'productlist'})
            // }
        },
        created(){
                console.log(this.$route.params.id)
                var id=this.$route.params.id
                console.log(id);
                this.$http.get('http://localhost:3000/productListArray/'+ id).then(function (responce){
                    console.log(responce);
                    this.jsonData=responce.body
                    console.log(this.jsonData)
                })
            },
    }
</script>

<!-- this.$router.push(
    //   { 
    //     name: 'productlist',
    //     params: { id: this.$route.params.id }
    //   }
    // ) -->