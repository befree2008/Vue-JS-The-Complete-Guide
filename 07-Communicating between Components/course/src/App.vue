<template>
  <div class='container mbg'>
    <div class="row">
      <div class="col-xs-12">
      <h1>The User Component</h1>
      <p>I'm an awesome user</p>
      <button class='btn btn-success' @click='changeName' type="button" >ChangeName</button>
      <p>Name is {{ nadb }}</p>
      <p>My age is {{ age }}</p>
      <hr>
    </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail :name="nadb" :age="age" @delAge="age=$event"
                    @resetName='resetName'></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit :age="age" :addAge="ageAddOne"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from './UserDetail.vue'
import UserEdit from './UserEdit.vue'

export default {
  data () {
    return {
      nadb:'liang',
      age : 36,
    }
  },
  methods: {
    changeName(){
      this.nadb = "gavin"
    },
    resetName($event){
      console.log($event);
      this.nadb = $event;
    },
    ageAddOne(){
      this.age = this.age + 1;
    }

  },
  components : {
    appUserDetail : UserDetail,
    appUserEdit : UserEdit
  }
}
</script>

<style scoped>
.mbg {
  background-color: #81c5f0;
  padding: 20px;
  border: 1px solid black;

}

</style>
