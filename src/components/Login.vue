<template>
    <div class="login">

      

      
<form>
    <div class="imgcontainer">
      <img src="../assets/img_avatar2.png" alt="Avatar" class="avatar">
    </div>
  
    <div class="container">
        <div class="form-group">
            <label for="uname">Username:</label>
            <input type="text" v-model="input.username" class="form-control" placeholder="Enter User Name" id="username">
          </div>
          <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" v-model="input.password" class="form-control" placeholder="Enter password" id="pwd">
          </div>
    
      <button type="submit" v-on:click="login()">Login</button>

      <!-- <label>
        <input type="checkbox" checked="checked" name="remember"> Remember me
      </label> -->
    </div>
  
    <!-- <div class="container" style="background-color:#f1f1f1">
      <button type="button" class="cancelbtn">Cancel</button>
      <span class="psw">Forgot <a href="#">password?</a></span>
    </div> -->
  </form>
        <!-- <router-view></router-view> -->
    
    </div>
</template>
<script>
    export default{
        name:'Login',
        data(){
            return {
                input:{
                    username:"",
                    password:""
                }
            }
        },
        methods:{
            login(){
                if(this.input["username"] == "admin" && this.input["password"] == "123"){
                localStorage.setItem('currentUser', JSON.stringify(this.input));
                this.obj =JSON.parse(localStorage.getItem('currentUser'));
                console.log(this.obj);
                    this.$store.commit("setAuthentication",true), //true
                    this.$router.push({name:"dashboard"})
                    //push,replace,go
                }else{
                    alert("this username and password is incorrect")
                    console.log("this username and password is incorrect")
                }
            }
        }
    }
</script>

<style scoped>
    /* Bordered form */
form {
    margin-left: 30%;
    margin-right: 30%;
  /* border: 3px solid #f1f1f1; */
}

/* Full-width inputs */
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}

/* Extra style for the cancel button (red) */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

/* Center the avatar image inside this container */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

/* Avatar image */
img.avatar {
  width: 40%;
  border-radius: 50%;
}

/* Add padding to containers */
.container {
  padding: 16px;
}

/* The "Forgot password" text */
span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}
</style>
 