<template lang="html">
  <div class="">
    <h3>Qoutes Added</h3>
    <div class="progress">
      <div class="progress-bar"
            role="progressbar"
            aria-valuenow="10"
            aria-valuemin="0"
            aria-valuemax="100"
            :style="{width: (qoutes.length / maxQoutes)*100 + '%'}"
            >
            {{qoutes.length}} / {{maxQoutes}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['qoutes', 'maxQoutes']
}
</script>

<style lang="css">
</style>
