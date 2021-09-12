<template>
  <q-layout view="lHh Lpr lFf">


    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-white text-primary">
      <q-tabs
        no-caps
        active-color="primary"
        indicator-color="transparent"
        class="text-grey"
      >
        <q-route-tab to="/home" label="Home" icon="las la-home" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
export default ({
  name: 'MainLayout',
})
</script>
