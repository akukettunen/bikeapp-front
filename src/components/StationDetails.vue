<template>
  <v-card class="station_details">
    <div class="station_details_header">
      {{ station.name_fi }}
    </div>
    <div class="station_details_subheader">
      {{ station.name_sv }}
    </div>
    <div>
      {{ station.addr_fi}}
    </div>
    <v-row class="my-5" justify="center">
      <v-col style="vertical-align: center;" cols="2">
        <v-card  class="station_details_card">
          <div class="station_details_card_number">
            {{ leavingTripsCount }}
          </div>
          <div>
            Departed
          </div>
        </v-card>
      </v-col>
      <v-col style="vertical-align: center;" cols="3">
        <v-card class="station_details_card">
          <div class="station_details_card_number">
            {{ arrivingTripsCount }}
          </div>
          <div>
            Arrived
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['station'],
  data: () => ({
    details: null
  }),
  created () {
    this.getStationDetails(this.station.id)
      .then(e => {
        this.details = e
      })
  },
  computed: {
    arrivingTripsCount () {
      return this.details?.endedHereCount
    },
    leavingTripsCount () {
      return this.details?.startedHereCount
    }
  },
  methods: {
    ...mapActions([
      'getStationDetails'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .station {
    &_details {
      max-width: 800px;
      padding: 30px;

      &_header {
        font-weight: 400;
        font-size: 2em;
      }

      &_subheader {
        font-weight: 300;
        font-size: 1em;
        color: rgb(70, 70, 70);
      }

      &_card {
        height: 100px;
        width: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &_number {
          font-weight: 600;
          font-size: 2em;
        }
      }
    }
  }
</style>
