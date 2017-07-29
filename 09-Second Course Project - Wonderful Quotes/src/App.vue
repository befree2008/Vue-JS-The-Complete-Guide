<template>
  <div class="container">
    <app-header :qoutes='qoutes' :maxQoutes='maxQoutes'></app-header>
    <app-new-qoute @qouteAdded="newQoute"></app-new-qoute>
    <app-qoute-grid :qoutes="qoutes" @deleteQoute='deleteQoute'></app-qoute-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">
          Info: Click on a Qoute to delete it
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import QouteGrid from './component/QouteGrid.vue';
import NewQoute from './component/NewQoute.vue';
import Header from './component/Header.vue';

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
      if (this.qoutes.length >= this.maxQoutes) {
        alert("please delete qoute first!");
        return;
      }
      this.qoutes.push(qoute);
    },
    deleteQoute(idx) {
      console.log("deleteQoute " + "App")
      this.qoutes.splice(idx, 1);
    },
  },
  components : {
      appQouteGrid : QouteGrid,
      appNewQoute : NewQoute,
      appHeader : Header,
  }
  }
  </script>

  <style>

  </style>
