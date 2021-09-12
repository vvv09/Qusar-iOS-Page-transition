import { boot } from 'quasar/wrappers'
import store from 'src/myStore'

let routerInstance = null

export default boot(({ router }) => {

  routerInstance = router

  router.afterEach((to, from) => {
    let fromRootPath = `/${ from.path.split('/')[1] }`
    let toRootPath = `/${ to.path.split('/')[1] }`
    // if we navigated to a different 'section'
    if (fromRootPath !== toRootPath) {
      // don't use page transition
      store.state.usePageTransition = false
    // we navigated to the same section
    } else {
      // don't use page transition
      store.state.usePageTransition = true

      if (from.path === to.path && to.path !== toRootPath) {
       router.push(toRootPath)
      }
    }

    updateNavItem()

    function updateNavItem() {
      const naveItemIndex =
        store.state.navItems.findIndex(navItem => navItem.root === toRootPath)
      store.state.navItems[naveItemIndex].to = to.path
    }

  })
})

export { routerInstance }
