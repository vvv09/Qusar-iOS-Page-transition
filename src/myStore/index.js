// Vuex can be used instead of it

import { reactive } from 'vue'


const state = reactive({
  usePageTransition: false,
  navItems: [
    {
      to: '/home',
      icon: 'las la-home',
      label: 'Home',
      root: '/home',
    },
    {
      to: '/questions',
      icon: 'las la-question-circle',
      label: 'Questions',
      root: '/questions',
    },
  ]
})

const store = {
  state
}

export default store
