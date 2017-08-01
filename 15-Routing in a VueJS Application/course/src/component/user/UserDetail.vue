<template lang="html">
  <div class="">
    <h3>Some User Details</h3>
    <p>User loaded has ID: {{$route.params.id}}</p>
    <router-link :to="'/user/' + $route.params.id + '/edit'"
      class='btn btn-primary'>Edit User</router-link>
  </div>

</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
