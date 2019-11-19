<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ul>
      <li><router-link to="/login">Login</router-link></li>
      <li><router-link to="/signup">Signup</router-link></li>
      <li><router-link to="/protected">Protected</router-link></li>
      <li><button v-on:click="logout">Log out</button></li>
      <li v-if="loggedin()">You are: {{ username() }}</li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
    username: function() { return this.$auth.email; },
    loggedin: function() { return this.isLoggedIn(); },
    logout: function(){
      this.$auth.authToken = "";
      this.$router.push("/")
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
