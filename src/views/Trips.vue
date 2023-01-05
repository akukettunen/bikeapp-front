<template>
  <v-container>
    <v-card class="mb-5" v-for="trip in trips" :key="trip.id">
      <TripCard :trip="trip"></TripCard>
    </v-card>
    <div class="text-center">
      <div>
        Page {{ tripsPage }}
      </div>
      <v-btn @click="changeTripsPage( Math.max( 1, tripsPage - 1 ) )">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-btn @click="changeTripsPage( tripsPage + 1 )">
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TripCard from '@/components/TripCard'

export default {
  name: 'Trips',
  created () {
    this.getTrips(this.tripsPage)
  },
  components: { TripCard },
  data: () => ({
  }),
  methods: {
    ...mapActions([
      'getTrips',
      'changeTripsPage'
    ])
  },
  computed: {
    ...mapGetters([
      'trips',
      'tripsPage'
    ])
  }
}
</script>
