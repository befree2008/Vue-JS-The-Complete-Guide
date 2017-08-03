<template lang="html">
    <div class="row">
      <div class="col-xs-6">
        <app-server-list></app-server-list>
      </div>
      <div class="col-xs-6">
          <app-server-detail></app-server-detail>
      </div>
    </div>
</template>

<script>
import ServerList from './ServerList.vue'
import ServerDetail from './ServerDetail.vue'

export default {
  components: {
    'app-server-list' : ServerList,
    'app-server-detail' : ServerDetail,
  }
}
</script>

<style lang="css">
</style>
