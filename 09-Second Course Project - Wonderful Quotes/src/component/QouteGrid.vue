<template lang="html">
  <div class="row">
    <app-qoute v-for="qoute in qoutes">{{ qoute }}</app-qoute>
  </div>
</template>

<script>
import Qoute from './Qoute.vue';

export default {
  props:['qoutes'],

  components: {
    appQoute : Qoute,
  }

}
</script>

<style lang="css">
</style>
