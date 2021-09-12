<template>
  <header
    class="q-header q-layout__section--marginal
         fixed-top q-header--bordered page-header
         absolute-top bg-white text-dark">
    <div
      class="q-toolbar row no-wrap items-center"
    >
      <slot name="buttons-left" />
      <div
        class="page-header-title q-pl-none q-toolbar__title ellipsis absolute-center text-body1"
      >
        <slot name="title" />
      </div>
    </div>
  </header>
</template>

<script>
    export default {
        name: "PageHeader"
    }
</script>

<style scoped>

</style>
