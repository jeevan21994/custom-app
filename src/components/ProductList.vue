<template>
  <div id="productlist">
    <div class="container">
        <div class="row">
          <div class="col-sm-2 col-md-2"></div>
          <div class="col-sm-8 col-md-8">
              <div class="container">
                  <h2>Product List Table</h2>
                  <!-- <input @keyup="search" id="search" type="search" required v-model="keyword"> -->
                  <input type="text" v-model="keyword" class="form-control" id="search" placeholder="Search..."/>
                  <table class="table table-dark table-striped" >
                    <thead>
                      <tr>
                        <th>Sno</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                          <tr v-for="(item,index) in blogs" :key="item.id">
                          <td>{{index}}</td>
                          <td>{{item.name}}</td>
                          <td>{{item.age}}</td>
                          <td>
                              <!-- <router-link :to="{name : 'productupdate' ,params : {id: item.id}}">Edit</router-link> -->
                           <button class="btn btn-primary" style="margin-right: 10px;" type="button" v-on:click="editProduct(item)">
                            Edit</button>
                          
                           <button class="btn btn-danger" type="button" v-on:click="deleteProduct(item)">Delete</button>
                          </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
          </div>
          <div class="col-sm-2 col-md-2">
          <button type="button" class="btn btn-primary" v-on:click="goingComponent">ProductAdd</button> 

          </div>

        </div>
    </div>
  </div>
</template>
<script>
      import { mapGetters,mapActions} from "vuex"
  export default{
      name:'productlist',
    
      computed:{
        ...mapGetters(["allProductsList"]),
        blogs : function(){//searching
          return this.allProductsList.filter((blog)=>{
            return blog.name.match(this.keyword)
          })
        }
    },
      
      data(){
          return {
            keyword: '',
            name:''
          }
      },
      methods:{
          ...mapActions(["getProduct","deleteProduct",]),//going product.js
          goingComponent:function(){
          this.$router.replace('/productadd')
      },


      editProduct(item){
        // this.$router.replace({ name: "productupdate", params: {id:item.id}, query: {q1: "q1"} })
        this.$router.replace({ name: "productupdate", params: {id:item.id} })
          // this.$store.dispatch('edit', item)
      },
      deleteProduct:function(id){
      this.allProductsList.splice(this.allProductsList.indexOf(id), 1);

      }
      },
      created(){
        this.getProduct();
     },
  }
</script>

