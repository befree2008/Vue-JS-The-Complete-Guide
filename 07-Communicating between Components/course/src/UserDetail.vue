<template lang="html">
<div >
    <h2>User Detail</h2>
    <p>Many detail</p>
    <p>My name is {{ addFamilyName() }}</p>
    <p>My age is {{ age }}</p>
    <button type="button" class='btn btn-default' @click='resetName'>Reset Name</button>
    <button type="button" class='btn btn-default' @click='minusAge'>Minus Age</button>
</div>
</template>

<script>
export default {
  props :['name', 'age'],
  methods : {
    addFamilyName() {
      return this.name + 'wang';
    },
    resetName(){
      //this.name = "liang";
      this.$emit('resetName', "liang")
    },
    minusAge(){
      //this.name = "liang";
      this.$emit('delAge', this.age - 1)
    }
  }

}
</script>

<style lang="css" scoped>
 div {
   background-color: #e97f7f;
   padding: 20px ;
 }

</style>
