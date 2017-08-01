<template lang="html">
    <div class="">
      <p>Please select a user</p>
      <hr>
      <ul class="list-group">
          <router-link tag='li' to='/user/1' class="list-group-item" style="cursor: pointer">User1</router-link>
          <router-link tag='li' to='/user/2' class="list-group-item" style="cursor: pointer">User2</router-link>
          <router-link tag='li' to='/user/3' class="list-group-item" style="cursor: pointer">User3</router-link>
        </ul>
      </ul>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
