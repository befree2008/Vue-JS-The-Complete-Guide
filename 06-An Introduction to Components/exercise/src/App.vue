<template>
  <div class='container'>
    <app-header></app-header>
    <app-board></app-board>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './Header.vue'
import Board from './Board.vue'
import Footer from './Footer.vue'
export default {
  components: {
    'app-header' : Header,
    'app-board': Board,
    'app-footer' : Footer,
  }
}
</script>

<style>
</style>
