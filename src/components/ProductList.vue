<template>
    <div id="productlist">

      <div class="container">
          <div class="row">
            <div class="col-sm-2 col-md-2"></div>
            <div class="col-sm-8 col-md-8">
                <div class="container">
                    <h2>Product List Table</h2>
                    <table class="table">
                      <thead>
                        <tr>
                          <th>Sno</th>
                          <th>Name</th>
                          <th>Age</th>
                          <th>Action</th>

                        </tr>
                      </thead>
                      <tbody>
                        <!-- <tr v-for="(item,index) in allProductsList" :key="item.id"> -->
                            <tr v-for="(item,index) in allProductsList" :key="item.id">
                       
                            <td>{{index}}</td>
                            <td>{{item.name}}</td>
                          <td>{{item.age}}</td>
                            <td>
                                <router-link :to="{name : 'productupdate' ,params : {id: item.id}}">Edit</router-link>
                             <!-- <button type="button" v-on:click="editProduct(item)">Edit</button> -->
                            </td>
                            <td>   
                             <button type="button" v-on:click="deleteProduct(item.id)">Delete</button>
                            </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!-- <ProductUpdate/> -->
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
        // import ProductUpdate from './components/ProductUpdate.vue'

    export default{
        name:'productlist',
      
        computed:mapGetters(["allProductsList"]),
        data(){
            return {
            }
        },
        methods:{
            ...mapActions(["getProduct","deleteProduct"]),//going product.js
            goingComponent:function(){
            this.$router.replace('/productadd')
        }
  
        },
        created(){
          this.getProduct();
       },
    }
</script>

