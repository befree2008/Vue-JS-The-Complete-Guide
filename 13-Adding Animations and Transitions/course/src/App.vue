<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr>
          <button type="button" class='btn btn-primary'@click="show=!show">Show</button>
          <br><br>
        <transition name="fade">
          <div class="alert alert-info" v-if='show'>This is some info</div>
        </transition>


        <transition name="slide">
          <div class="alert alert-info" v-if='show'>This is some info</div>
        </transition>
        <transition  appear
          enter-active-class='animated bounceInLeft'
          leave-active-class='animated bounceOutRight'
          >
          <div class="alert alert-info" v-if='show'>This is some info</div>
        </transition>
        <hr>
        <button class="btn btn-primary" @click="load= !load">Load/Remove</button>
        <br><br>
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"

          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
          >
          <div class="" style="width: 300px; height : 100px; background-color:lightgreen"
          v-if="load">

          </div>
        </transition>
        <hr>
        <button class="btn btn-primary"
          @click="selectedComponent == 'app-success-alert' ?
                  selectedComponent = 'app-danger-alert' :
                  selectedComponent = 'app-success-alert'"
        >Change Component</button>
        <br><br>
        <transition name='fade' mode='out-in'><component :is="selectedComponent"></component></transition>
        <hr>
        <button class="btn btn-primary" @click='addItem'>Add Item</button>
        <ul class='list-group'>
          <li class="list-group-item" @click='removeItem(idx)'
                v-for='(n, idx) in numbers'> {{n}} </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
import DangerAlert from './DangerAlert.vue';
import SuccessAlert from './succssalert.vue';

export default {
  name: 'app',
  data () {
    return {
      show: true,
      load: true,
      elementWidth:100,
      selectedComponent : 'app-danger-alert',
      maxNum : 5,
      numbers : [1,2 ,3, 4, 5],
    }
  },
  methods : {
    beforeEnter(el){
      console.log('beforeEnter');
      this.elementWidth = 100;
      el.style.width = this.elementWidth + 'px';
    },
    enter(el, done){
      console.log('enter');
      let round = 1;
      const interval = setInterval(()=>{
        el.style.width = (this.elementWidth + round * 10) +'px';
        round++
        if (round>20) {
          clearInterval(interval);
          done();
        }

      }, 20);

    },
    afterEnter(el){
      console.log('afterEnter');
    },
    enterCancelled(el){
      console.log('enterCancelled');
    },

    beforeLeave(el){
      console.log('beforeLeave');
      this.elementWidth = 300;
      el.style.width = this.elementWidth + 'px';
    },
    leave(el, done){
      console.log('leave');
      let round = 1;
      const interval = setInterval(()=>{
        el.style.width = (this.elementWidth - round * 10) +'px';
        round++
        if (round>20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave(el){
      console.log('afterLeave');
    },
    leaveCancelled(el){
      console.log('leaveCancelled');
    },
    addItem(){
      const pos = Math.floor(Math.random()* this.numbers.length);
      this.numbers.splice(pos, 0, this.maxNum+1);
      this.maxNum ++;
    },
    removeItem: function(idx){
      this.numbers.splice(idx, 1);
    },
  },

  components : {
    appDangerAlert : DangerAlert,
    appSuccessAlert : SuccessAlert
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}

.slide-enter {
  opacity: 0;
}
.slide-enter-active{
  animation: slide-in 1s ease-out forwards;
  transition: opacity 1s;
}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
}

.slide-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to{
    transform: translateY(0px);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
  }
  to{
    transform: translateY(20px);
  }
}
</style>
