<template>
  <div id="container">
    <app-new-qoute @qouteAdded="newQoute"></app-new-qoute>
    <app-qoute-grid :qoutes="qoutes"></app-qoute-grid>
  </div>
</template>

<script>
import QouteGrid from './component/QouteGrid.vue';
import NewQoute from './component/NewQoute.vue';

export default {
  name: 'app',
  data : function() {
    return {
      maxQoutes : 10,
      qoutes : [
        'Just a Qoute to see something',
      ]};
    },
  methods: {
    newQoute(qoute) {
      this.qoutes.push(qoute);
    },
  },
  components : {
      appQouteGrid : QouteGrid,
      appNewQoute : NewQoute,
  }
  }
  </script>

  <style>

  </style>
