export default {
  name: 'InstagramFeed',
  props: {
    limit: {
      type: [Number, String],
      default: 20
    }
  },
  computed: {
    feed () {
      return this.$store.getters['instagram-feed/media']
    }
  },
  beforeMount () {
    this.$store.dispatch('instagram-feed/get', this.limit)
  }
}
