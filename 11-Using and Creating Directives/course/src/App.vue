<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Directive</h1>
          <p v-text="'some text'"></p>
          <p v-html="'<strong>Some Strong Text</strong>'"></p>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Custom Directive</h1>
          <p v-local-highlight:bg="'red'">custom directive</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  directives : {
    'local-highlight': {
      bind(el, binding, vnode){
        //el.style.backgroundColor = 'green';
        //el.style.backgroundColor = binding.value;
        if (binding.arg == 'bg'){
          el.style.backgroundColor = binding.value;
        } else {
          el.style.color = binding.value;
        }
      },
    },

  }
}
</script>

<style>

</style>
