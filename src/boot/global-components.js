import { boot } from 'quasar/wrappers'

const globalComponents = {
  'page': require('components/Page/Page').default
}

export default boot(async ({ app }) => {
  for (const key in globalComponents) {
    app.component(key,globalComponents[key])
  }
})
