# Vue Storefront Instagram Feed

Instagram feed component for Vue Storefront

## Pre requisites

1. Install [vue-storefront-instagram-api](https://github.com/jahvi/vue-storefront-instagram-api) in your `vue-storefront-api` server.

## Installation

As of Vue Storefront 1.6 modules can't be installed as separate npm packages so you'll need to copy the source files into your `vue-storefront` installation.

1. Download this repo into `src/modules/vue-storefront-instagram-feed` folder.
2. Register module in `src/modules/index.ts`

```js
...
import { InstagramFeed } from '../modules/vue-storefront-instagram-feed'
...

export const registerModules: VueStorefrontModule[] = [
  ...
  InstagramFeed
]
```

3. Add instagram endpoint to `config/local.json` file:

```json
"instagram": {
  "endpoint": "http://url-to-your-vuestorefront-api.com/api/ext/vue-storefront-instagram-api/feed"
}
```

## Example usage

This module provides a mixin that will expose a `feed` property with the contents of the Instagram feed, however it needs to be implemented by yourself.

For example you can create a custom component like the following:

```vue
<template>
  <div class="row center-xs">
    <div
      class="col-sm-3 pb15"
      v-for="media in feed"
      :key="media.id"
    >
      <div class="tile center-xs middle-xs">
        <img
          class="tile-image"
          v-lazy="media.media_url"
          :alt="media.caption"
        >
      </div>
    </div>
  </div>
</template>

<script>
import InstagramFeed from 'src/modules/vue-storefront-instagram-feed/components/InstagramFeed'

export default {
  name: 'InstagramFeed',
  mixins: [InstagramFeed]
}
</script>
```
