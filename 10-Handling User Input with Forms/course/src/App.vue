<template>
  <div id="app" class='container'>
    <form v-if="!isSubmited">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>File a complaint</h1>
          <hr>
          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email"
                   class="form-control"
                   id="email"
                   placeholder="Email"
                   v-model.lazy='userData.email'>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password"
                   placeholder="Password"
                   v-model='userData.passwd'>
          </div>

          <div class="form-group">
            <label for="age">Age</label>
            <input type="text" class="form-control" id="age" placeholder="Age"
                   v-model.number='userData.age'>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <label for="message">Message</label>
          <br>
          <textarea class="form-control" id="message" rows=5
                    v-model="message">
          </textarea>

        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="sendmail">
              <input type="checkbox" id='sendmail' value='SendMail'
                     v-model='sendMail'>
              SendMail
            </label>
            <label for="sendInformail">
              <input type="checkbox" id='sendInformail' value='SendInforMail'
              v-model='sendMail'>
              SendInformail
            </label>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="male">
              <input type="radio" id='male' value='Male' name='gender'
                     v-model='gender'>
              Male
            </label>
            <label for="female">
              <input type="radio" id='female' value='Female' name='gender'
                     v-model='gender'>
              Female
            </label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <app-switched v-model='mySwitch'></app-switched>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="priority">Priority</label>
            <select class="form-control" id='priority'
                    v-model='selPriority'>
              <option v-for="priority in priorities"
                      :selected="priority == 'Medium'" >
                      {{ priority }}
              </option>
            </select>
          </div>
        </div>

      </div>
<hr>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">

          <button type="submit" class="btn btn-primary pull-right"
                   @click.prevent="submitted">Submit</button>
        </div>
      </div>
    </form>
    <hr>
    <div class="row" v-if="isSubmited">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">

        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Your Data</h3>
          </div>
          <div class="panel-body">
            <p>Mail: {{userData.email}}</p>
            <p>Password: {{userData.passwd}}</p>
            <p>Age: {{userData.age}}</p>
            <p style="white-space:pre">Message:  {{message}}</p>
            <p><strong>Send Mail?</strong></p>
            <ul>
              <li v-for='item in sendMail'>{{item}}</li>
            </ul>
            <p>Gender: {{gender}}</p>
            <p>Priority: {{selPriority}}</p>
            <p>Switch: {{mySwitch}}</p>
          </div>
        </div>
        <button class="btn btn-success pull-right" @click="isSubmited = !isSubmited">Reset</button>
      </div>
    </div>

  </div>
</template>

<script>
import Switched from './component/switched.vue'

export default {
  name: 'app',

  data : function(){
    return {
      userData : {
        email: '',
        passwd: '',
        age: 36
      },
      message : 'Input your complaint',
      sendMail : [],
      gender : 'Male',
      priorities : ['High', 'Medium', 'Low'],
      selPriority: "High",
      mySwitch : true,
      isSubmited : false
    };
  },

  components : {
    appSwitched : Switched,
  },

  methods :{
    submitted(){
      this.isSubmited = true;
    }
  }

}
</script>

<style>
</style>
