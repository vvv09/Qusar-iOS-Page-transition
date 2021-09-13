<template>
  <page>
    <page-header>
      <template #buttons-left>
        <page-header-button-back
          label="Images"
        />
      </template>
      <template #title>Image</template>
    </page-header>
    <page-body>
      <transition
        appear
        enter-active-class="animated fadeIn slower"
        leave-active-class="animated fadeOut slower"
      >
        <div
          v-if="image"
        >
          <q-img
            :src="image.url"
            no-spinner
            no-transition
          />
          <div class="q-pa-lg">
            <div class="q-mb-md text-h5">{{ image.caption }}</div>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Amet earum fuga nam nisi.
              Alias, aliquam animi consequatur culpa inventore
              neque officia perferendis quo repudiandae.
              A aliquam magnam minus possimus tempore!</p>

            <q-expansion-item
              v-model="expanded"
              icon="las la-eye"
              label="JSON"
              caption="See image object in JSON format"
            >
              <pre>
                {{ image }}
              </pre>
            </q-expansion-item>
          </div>
        </div>
      </transition>
    </page-body>
  </page>
</template>

<script>

  import { onActivated, onDeactivated, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import store from 'src/myStore'

  export default ({
    name: 'Images',
    data() {
      return {
        expanded: false
      }
    },
    setup() {

      let image = ref()

      onActivated(() => {
        let route = useRoute()
        image.value = store.getters.getImage(route.params.id)
      })

      onDeactivated(() => {
        image.value = null
      })

      return {
        store,
        image
      }
    }
  })

</script>
