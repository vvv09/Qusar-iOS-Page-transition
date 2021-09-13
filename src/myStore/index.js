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
    {
      to: '/images',
      icon: 'las la-image',
      label: 'Images',
      root: '/images',
    },
  ],
  images: [
    {
      id: 'id1',
      url: '/images/1.jpg',
      caption: 'Cat',
    },
    {
      id: 'id2',
      url: '/images/2.jpg',
      caption: 'Tree',
    },
    {
      id: 'id3',
      url: '/images/3.jpg',
      caption: 'Ancient street',
    },
    {
      id: 'id4',
      url: '/images/4.jpg',
      caption: 'Beautiful waterfall',
    },
    {
      id: 'id5',
      url: '/images/5.jpg',
      caption: 'Coffee beans',
    },
    {
      id: 'id6',
      url: '/images/6.jpg',
      caption: 'Lighthouse at dusk',
    },
  ],
  iosBrowserSwipingBack: false,
})

const getters = {
  getImage(imageId) {
    console.log('imageId', imageId)
    return state.images.filter(image => image.id === imageId)[0]
  }
}

const store = {
  state,
  getters
}

export default store
