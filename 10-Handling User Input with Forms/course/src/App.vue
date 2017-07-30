<template>
  <div id="app" class='container'>
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>File a complaint</h1>
          <hr>
          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" id="email" placeholder="Email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Password">
          </div>

          <div class="form-group">
            <label for="age">Age</label>
            <input type="text" class="form-control" id="age" placeholder="Age">
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <label for="message">Message</label>
          <br>
          <textarea class="form-control" id="message" rows=5>
          </textarea>

        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="sendmail">
              <input type="checkbox" id='sendmail' value='SendMail'>
              SendMail
            </label>
            <label for="sendInformail">
              <input type="checkbox" id='sendInformail' value='SendInforMail'>
              SendInformail
            </label>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="male">
              <input type="radio" id='male' value='Male'>
              Male
            </label>
            <label for="female">
              <input type="radio" id='female' value='Female'>
              Female
            </label>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="priority">Priority</label>
            <select class="form-control" id='priority'>
              <option value=""></option>
            </select>
          </div>
        </div>

      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <hr>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>

    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <hr>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Your Data</h3>
          </div>
          <div class="panel-body">
            <p>Mail:</p>
            <p>Password:</p>
            <p>Age:</p>
            <p>Message:</p>
            <p><strong>Send Mail?</strong></p>
            <ul>
              <li></li>
            </ul>
            <p>Gender:</p>
            <p>Priority:</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',

}
</script>

<style>
</style>
