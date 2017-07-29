<template lang="html">
  <div class="col-sm-6 col-md-3 col-lg-3" >
     <div class="panel panel-default">
      <div class="panel-body qoute">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {

  }
}
</script>

<style lang="css">
.panel-body{
  font-family: "Arizonia", cursive;
  font-size:24px;
  color: #6e6e6e;
  word-wrap:break-word;
}

.qoute {
  cursor: pointer;
}

.qoute:hover{
  background-color: #ffe2e2;
}
</style>
