<template lang="html">
  <div class="container">
    <h3>New Qoute</h3>
    <slot></slot>
    <button  @click='counter++'> Increase</button>
    <p>{{ counter }}</p>
  </div>

</template>

<script>
export default {
  data(){
    return {
      counter : 0
    };
  },
  destroyed() {
    console.log("New qoute component destroied")
  },
  deactivated(){
    console.log("deactivated")
  },
  activated: function(){
    console.log("activated")
  },
}
</script>

<style lang="css">
</style>
