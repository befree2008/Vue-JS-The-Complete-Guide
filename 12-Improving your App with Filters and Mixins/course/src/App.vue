<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filter & Mixins</h1>
        <p>{{text | toUpperCase | to-lowercase }}</p>
        <input type="text" v-model='fruitText'>
        <ul>
          <li v-for='fruit in filterFruits'> {{ fruit }}</li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      text : "Hello world",
      fruits : ['Apple', 'Banana', 'Mango', 'Melon'],
      fruitText : "",
    };
  },

  filters : {
    toUpperCase(value) {
      return value.toUpperCase();
    }
  },

  computed: {
    filterFruits : function(){
      return this.fruits.filter((el) => {
        return el.match(this.fruitText);
      });
    },
  }
}
</script>

<style>

</style>
