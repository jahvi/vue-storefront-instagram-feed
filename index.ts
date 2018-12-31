import { module } from './store'
import { VueStorefrontModule, VueStorefrontModuleConfig } from '@vue-storefront/core/lib/module'

export const KEY = 'instagram-feed'

const moduleConfig: VueStorefrontModuleConfig = {
  key: KEY,
  store: { modules: [{ key: KEY, module }] },
}

export const InstagramFeed = new VueStorefrontModule(moduleConfig)
