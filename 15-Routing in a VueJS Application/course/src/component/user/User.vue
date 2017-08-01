<template lang="html">
  <div>
  <h1>The User page</h1>
  <hr>
  <button class="btn btn-primary" @click='navToHome'>Back</button>
  <hr>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  data(){
    return {
      id : this.$route.params.id,
    };
  },

  watch : {
    '$route'(to, from){
      this.id = to.params.id;
    }
  },

  methods :{
    navToHome(){
      this.$router.push('/')
    }
  }
}
</script>

<style lang="css">
</style>
