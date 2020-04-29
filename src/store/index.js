import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authenticated:false,
     productListArray:[]
  },
   getters:{
     //data ko recieve krne k liye ek method create krte hai jo ki getter k andar krte hai. 
    allProductsList : state => state.productListArray //state k andar jo product hai use allProduct k state m save kr diya.
},
  mutations: {
    setAuthentication(state,status){
      console.log(state,status)
      state.authenticated=status
    },

    //get list with json
    setProduct:(state ,product)=>(state.productListArray=product),//get api
    
    updateEditForm:(state ,data)=>{state.productListArray.forEach(v=>{
      if(v.id == data.id){
        v=data
      }
    })},//get api
   
    newProduct:(state ,prod)=>(
      // state.productListArray.unshift(prod)//post api //unshift data ko top pr add krta hai
      state.productListArray.push(prod)),
      
    removeProduct:(state ,id) => (state.productListArray.filter(product => product.id !== id)),//filter javascript function api and ui se delete krne k liye product.id use

  },
  actions: {
    // after json file create than axios import than create async method
    async getProduct({commit}){
      const response =await axios.get("http://localhost:3000/productListArray");
      commit("setProduct",response.data)
  },
  async editForm({commit},data){
    const response =await axios.put("http://localhost:3000/productListArray/"+data.id,data);
    console.log(response.data)
    commit("updateEditForm",response.data)
},
  async addProduct({commit},prod){
    const response =await axios.post("http://localhost:3000/productListArray",prod);
    commit("newProduct",response.data)
},
async deleteProduct({commit},id){
  await axios.delete("http://localhost:3000/productListArray/"+id);
  commit("removeProduct",id)
},
  },
  modules: {
   
  }
})

