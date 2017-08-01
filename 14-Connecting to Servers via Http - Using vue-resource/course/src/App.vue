<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>HTTP</h1>
        <hr>
        <div class="form-group">
          <label>Username</label>
          <input type="text" class="form-control" v-model='user.username'>
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="text" class="form-control" v-model='user.email'>
        </div>
        <button type="button" class='btn btn-primary' @click="submit">Submit</button>
        <hr>
        <button type="button" class='btn btn-primary' @click='getData'>Get Data</button>
        <br>
        <br>
        <ul class="list-group">
          <li class="list-group-item" v-for='u in userList'>{{u.username}} - {{u.email}}</li>
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
      user:{
        username : '',
        email : ''
      },
      userList : [],
    }
  },

  methods : {
    submit : function(){
      //console.log(this.user);
      this.$http.post("https://vue-http-34f62.firebaseio.com/tblUser.json",
                      this.user)
                .then(response=>{
                  console.log(response);
                }, error=>{
                  console.log(error);
                });
    },

    getData() {
      this.$http.get("https://vue-http-34f62.firebaseio.com/tblUser.json")
                .then(response=>{
                  console.log(response);
                  return response.json();
                })
                .then(data => {
                  console.log(data);
                  const resArray = [];
                  for (let key in data ){
                    console.log(data[key]);
                    resArray.push(data[key]);
                  }
                  this.userList = resArray;
                });

    },

  }

}
</script>

<style>
</style>
