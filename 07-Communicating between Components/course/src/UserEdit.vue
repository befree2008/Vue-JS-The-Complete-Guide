<template lang="html">
<div>
    <h2>Edit User </h2>
    <p>edit detial</p>
    <p>My age is {{ age }}</p>
    <button type="button" class='btn btn-default' @click='addAge()'>AddAge CallBack</button>
</div>
</template>

<script>
export default {
  props :['age', 'addAge']
}
</script>

<style lang="css" scoped>
 div {
   background-color: #7fe9a0;
   padding: 20px;
 }

</style>
