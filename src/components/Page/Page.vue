<template>
    <div class="page absolute-top fit bg-white">
      <header
        class="q-header q-layout__section--marginal
         fixed-top q-header--bordered page-header
         absolute-top bg-white text-dark">
        <div
          class="q-toolbar row no-wrap items-center"
        >
          <div
            class="q-toolbar__title ellipsis text-center text-body1"
          >
            Quasar Framework
          </div>
        </div>
      </header>


      <q-scroll-area class="page-body absolute-top fit">

        <div class="page-body-spacer-header"></div>

        <div class="q-pa-lg">
          <p v-for="i in 20" :key="i">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Atque commodi eaque inventore ipsam odio rerum sunt.
            A aliquid, assumenda cupiditate eaque eius
            hic nemo nesciunt possimus quae quas quasi voluptas!</p>
        </div>

        <div class="page-body-spacer-footer"></div>

      </q-scroll-area>
    </div>
</template>

<script>
    export default {
        name: "Page"
    }
</script>

<style scoped>

</style>
