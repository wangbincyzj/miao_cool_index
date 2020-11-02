export const mixins = {
  routerMixin: {
    methods: {
      go(path) {
        this.$router.push(path)
      },
      goto(path) {
        window.open(path)
      }
    }
  }
}
