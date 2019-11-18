<template>
<div>
    <h3>Login</h3>
    <div>
        <input class="topcoat-text-input--large bottom-margin" type="text" placeholder="username" v-model="username" /><br />
        <input class="topcoat-text-input--large bottom-margin" type="password" placeholder="password" v-model="password" /><br />
        <button class="topcoat-button--large--cta" v-on:click="login">Log in</button>
    </div>
    <div>{{error}}</div>
</div>
</template>

<script>

export default {
  name: 'login',
  data: function() { return { username: '', password: '', error: '' } },
  methods: {
      login: function() {
          var self = this;
          this.$auth.login({email: self.username, password: self.password}, function(err, resp){
              if(err) return self.error = err;

              window.console.log(resp);
              self.$router.push({path: '/protected'})
          });
      }
  }
}
</script>

<style>
.bottom-margin { margin-bottom: 10px; }
</style>
