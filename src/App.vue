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
  console.log(token)
    if(token){
      this.$router.replace('/dashboard')
    }
    else{
    this.$router.replace('/login')

    }
    }
};
</script>
