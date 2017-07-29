<template lang="html">
  <div class="">
    <div class="title">
      <slot name="qouteTitle"></slot>
      <span><slot name="subTitle">this is subTitle</slot></span>
    </div>
    <hr>
    <div class="qouteContent">
      <p>A Wonderful Qoute!</p>
      <p>{{ qoute }}</p>
      <slot name="qouteContent"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props:['qoute']
}
</script>

<style lang="css" scoped="">
  div.title {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px  black;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
  }

  .qouteContent {
    padding: 30px;
    margin: 30px auto;
    text-align: center;
  }

  span {
    color : #ccc;
  }

  h2 {
    color: red;
  }
</style>
