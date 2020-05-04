<template>
  <div id="dashboard">
<div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <div class="topnav-right">
    <a href="#search">Search</a>
    <a href=""  v-on:click="clear">Logout</a>
  </div>
</div>

<div class="container-fluid">
    <div class="row">
      <div class="col-sm-3 col-md-10">
      </div>
      <div class="col-sm-2 col-md-2">
          <button type="button" class="btn btn-primary" v-on:click="goingComponent">ProductListing</button> 
      </div>
    </div>
</div>
    <router-view></router-view>
  </div>

</template>

<script>
//   import store from '../store/index'
export default {
  name: 'dashboard',
 
  components: {
  },

  data: () => ({
  }),
  methods:{
   clear :function(){
  localStorage.getItem("item");
  localStorage.removeItem("currentUser");
  this.$router.push("/login").catch(error => {
                 if (error.name != "NavigationDuplicated") {
                     throw error;
                  }
              }); 
            


   },
   goingComponent:function(){
    this.$router.push("/productlist").catch(error => {
                 if (error.name != "NavigationDuplicated") {
                     throw error;
                  }
              });
   }
  },
  created(){
  }
};
</script>
<style scoped>
.topnav {
overflow: hidden;
background-color: #333;
}

.topnav a {
float: left;
color: #f2f2f2;
text-align: center;
padding: 14px 16px;
text-decoration: none;
font-size: 17px;
}

.topnav a:hover {
background-color: #ddd;
color: black;
}

.topnav a.active {
background-color: #4CAF50;
color: white;
}

.topnav-right {
float: right;
}

</style>