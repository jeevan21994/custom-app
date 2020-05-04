import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    authenticated:false,
     productListArray:[],
     jsonData:{},
     msg:"get state", // get msg in dashboard
  },
   getters:{
    allProductsList : state => state.productListArray //state k andar jo product hai use allProduct k state m save kr diya.
},
  mutations: {
    setAuthentication(state,status){
      state.authenticated=status
    },

    
    
    setProduct:(state ,product)=>{
      (state.productListArray=product)
      },//get api

    updateEditForm:(state ,data)=>{
      state.productListArray.forEach(v=>{
      if(v.id == data.id){
        v=data
      }
    })
  },
   
    newProduct:(state ,prod)=>(
      state.productListArray.push(prod)),
    removeProduct: (state, task) => state.tasks = state.tasks.filter(t => task.id !== t.id),

  },
  actions: {
    async getProduct({commit}){
      const response =await axios.get("http://localhost:3000/productListArray");
      commit("setProduct",response.data)
  },


  async editForm({commit},data){
    const response =await axios.put("http://localhost:3000/productListArray/"+data.id,data);
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
