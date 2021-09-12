// Vuex can be used instead of it

import { reactive } from 'vue'


const state = reactive({
  usePageTransition: false
})

const store = {
  state
}

export default store
