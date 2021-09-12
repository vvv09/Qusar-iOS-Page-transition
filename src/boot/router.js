import { boot } from 'quasar/wrappers'
import store from 'src/myStore'

export default boot(async ( { router }) => {
  router.afterEach((to, from) => {
    let fromRootPath = from.path.split('/')[1]
    let toRootPath = to.path.split('/')[1]
    //if we navigated to a different 'section'
    if (fromRootPath !== toRootPath) {
      // don't use page transition
      store.state.usePageTransition = false
    } else {
      // don't use page transition
      store.state.usePageTransition = true
    }
  })
})
