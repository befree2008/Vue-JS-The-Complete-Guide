<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-12">
        <app-qoute qoute="A wonderful Qoute from Parent!">
          <h2 slot='qouteTitle'>{{ qouteTitle }}</h2>
          <div slot='qouteContent'>
            <p>qoute Paragraph one</p>
            <p>qoute Paragraph two</p>
          </div>
          <p slot='subTitle'>Vue is really amazing</p>
        </app-qoute>
      </div>
    </div>
  </div>
</template>

<script>

import Qoute from './component/Qoute.vue';

export default {
  name: 'app',
  data(){
    return {
      qouteTitle:"The Qoutes"
    };
  },
  components : {
    'app-qoute': Qoute
  }
}
</script>

<style>

</style>
