<template>
  <div id="app" class="container">
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>Routing</h1>
      <hr>
      <app-header></app-header>
      <router-view></router-view>
      <h1>Hello</h1>
      <h1>Hello</h1>

    </div>
    <div>

  </div>
  </div>

</template>

<script>
import Header from './component/Header.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    appHeader : Header,
  }
}
</script>

<style>

</style>
