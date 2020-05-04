<template>
  
  
  <div id="app">
   
    <router-view></router-view>
  </div>

</template>

<script>

export default {
  name: 'App',
 
  components: {
  },

  data: () => ({
  }),
  methods:{
   
  },
  created(){
    const token =(localStorage.getItem('currentUser'));
    if(token){
      this.$router.push("/dashboard").catch(error => {
                   if (error.name != "NavigationDuplicated") {
                       throw error;
                    }
                });
    }
    else{
      this.$router.push("/login").catch(error => {
                   if (error.name != "NavigationDuplicated") {
                       throw error;
                    }
                });

    }
    }
};
</script>
