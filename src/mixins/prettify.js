export default {
  methods: {
    prettify (time) {
      var date = new Date(0)
      date.setSeconds(time)
      return date.toISOString().substring(11, 19)
    }
  }
}
