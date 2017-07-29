<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-12">
        <hr>
        <button type="button" @click="selectedComponent = 'appQoute'">Qoute</button>
        <button type="button" @click="selectedComponent = 'appAuthor'">Author</button>
        <button type="button" @click="selectedComponent = 'appNew'">New</button>
        <hr>
        <keep-alive>
        <component :is="selectedComponent">
            <h2 slot='qouteTitle'>{{ qouteTitle }}</h2>
            <div slot='qouteContent'>
              <p>qoute Paragraph one</p>
              <p>qoute Paragraph two</p>
            </div>
            <p>Vue is really amazing</p>
        </component>
      </keep-alive>


      </div>
    </div>
  </div>
</template>

<script>

import Qoute from './component/Qoute.vue';
import Author from './component/Author.vue';
import New from './component/New.vue';

export default {
  name: 'app',
  data(){
    return {
      qouteTitle:"The Qoutes",
      selectedComponent: "app-qoute",
    };
  },
  components : {
    appQoute: Qoute,
    appAuthor : Author,
    appNew : New,
  }
}
</script>

<style>

</style>
