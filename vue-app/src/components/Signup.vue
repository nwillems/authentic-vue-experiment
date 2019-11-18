<template>
<div>
    <h3>Signup</h3>
    <div>
        <input class="topcoat-text-input--large bottom-margin" type="text" placeholder="username" v-model="username" /><br />
        <input class="topcoat-text-input--large bottom-margin" type="password" placeholder="password" v-model="password" /><br />
        <button class="topcoat-button--large--cta" v-on:click="signup">signup</button>
    </div>
    <div>{{error}}</div>
</div>
</template>

<script>

export default {
  name: 'signup',
  data: function() { return { username: '', password: '', error: '' } },
  methods: {
      signup: function() {
          var self = this;
          var confirmUrl = window.location.origin + '/confirm'; // Should use vue-router
          this.$auth.signup({email: self.username, password: self.password, confirmUrl}, function(err, resp){
              if(err) return self.error = err;

              window.console.log(resp);
              self.error = resp.message;
          });
      }
  }
}
</script>

<style>
.bottom-margin { margin-bottom: 10px; }
</style>
