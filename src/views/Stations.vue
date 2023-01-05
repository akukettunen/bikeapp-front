<template>
  <v-container>
    <v-card class="mb-5" v-for="station in stations" :key="station.id">
      <StationCard :station="station"></StationCard>
    </v-card>
    <div class="text-center">
      <div>
        Page {{ stationsPage }}
      </div>
      <v-btn @click="changeStationsPage( Math.max( 1, stationsPage - 1 ) )">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-btn @click="changeStationsPage( stationsPage + 1 )">
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import StationCard from '@/components/StationCard'

export default {
  name: 'Stations',
  created () {
    this.getStations(this.stationsPage)
  },
  components: { StationCard },
  data: () => ({
  }),
  methods: {
    ...mapActions([
      'getStations',
      'changeStationsPage'
    ])
  },
  computed: {
    ...mapGetters([
      'stations',
      'stationsPage'
    ])
  }
}
</script>
