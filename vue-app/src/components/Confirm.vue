<template>
<div>
    Confirming your email, thank you for taking the time :-)
</div>
</template>

<script>

export default {
  name: 'confirm',
  created: function(){
    const self = this;
    const query = this.$route.query
    var confirmToken = query.confirmToken,
        email = query.email;

    this.$auth.confirm({email, confirmToken}, function(){
        self.$router.push({ path: 'protected' })
    })
  }
}


</script>
