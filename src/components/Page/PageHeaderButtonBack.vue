<template>
  <q-btn
    @click="useGoBack"
    icon="chevron_left"
    color="primary"
    rounded
    dense
    flat
    no-caps
  />
</template>

<script>
  import useGoBack from 'src/use/useGoBack'

  export default {
    name: "PageHeaderButtonBack",
    setup() {
      return {
        useGoBack
      }
    }
  }
</script>

<style scoped>

</style>
