<template>
  <v-app>
    <!-- <v-app-bar></v-app-bar> -->
    <div class="my-10">
      <span :style="navBarStyle('trips')" class="nav-button pl-10" @click="$router.push('/trips')">Trips</span>
      <span :style="navBarStyle('stations')" class="nav-button ml-6" @click="$router.push('/stations')">Stations</span>
    </div>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  methods: {
    navBarStyle (text) {
      return this.$route.path.includes(text) ? { opacity: 1 } : { opacity: 0.5 }
    }
  }
}
</script>

<style lang="scss" scoped>
  .nav-button {
    font-size: 5em;
    color: rgb(0, 66, 73);
    cursor: pointer;
  }
</style>
