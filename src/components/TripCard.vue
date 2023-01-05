<template>
  <v-card class="trip">
    <v-row>
      <v-col class="trip_value pl-8" cols="6" md="3">
        <v-icon>mdi-arrow-top-right-thin</v-icon>
        {{trip.departure_station_name}}
      </v-col>
      <v-col class="trip_value" cols="6" md="5">
        <v-icon>mdi-arrow-bottom-right-thin</v-icon>
        {{trip.return_station_name}}
      </v-col>
      <v-col class="trip_value pl-8" cols="6" md="2">
        <v-icon size="34">mdi-tape-measure</v-icon>
        {{trip.distance}} m
      </v-col>
      <v-col class="trip_value" cols="6" md="2">
        <v-icon size="34">mdi-clock-outline</v-icon>
        {{ prettify(trip.duration) }}
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import prettify from '@/mixins/prettify'

export default {
  mixins: [prettify],
  props: ['trip'],
  data: () => ({
  }),
  computed: {
  }
}
</script>

<style lang="scss" scoped>
  .trip {
    &_value {
      font-weight: 350;
      font-size: 1em;
    }
  }
</style>
