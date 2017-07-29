<template lang="html">
  <div class="row">
    <form>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <label>Qoute</label>
        <textarea class='form-control' rows="3" v-model='qoute'></textarea>
        <button class='btn btn-primary' @click.prevent='createNew'>Add Qoute</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data : function () {
    return {
      qoute: ''
    };
  },
  methods : {
    createNew(){
      this.$emit('qouteAdded', this.qoute);
      this.qoute = '';
    },
  }

}
</script>

<style lang="css">
</style>
