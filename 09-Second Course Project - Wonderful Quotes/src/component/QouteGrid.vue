<template lang="html">
  <div class="row">
    <app-qoute v-for="(qoute, idx) in qoutes"
              @click.native="deleteQoute(idx)" >{{ qoute }}</app-qoute>
  </div>
</template>

<script>
import Qoute from './Qoute.vue';

export default {
  props:['qoutes'],

  components: {
    appQoute : Qoute,
  },

  methods : {
    deleteQoute:function(idx){
      console.log("deleteQoute " + "QouteGrid");
      this.$emit('deleteQoute', idx);
    }
  },

}
</script>

<style lang="css">
</style>
