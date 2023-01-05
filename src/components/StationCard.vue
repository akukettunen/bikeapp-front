<template>
  <v-card @click="detailsOpened = !detailsOpened" class="station">
    <v-row>
      <v-col cols="6" md="9" class="station_header">
        <div class="station_header--big">
          {{ station.name_fi }}
        </div>
        <div class="station_header--small">
          {{ station.name_sv }}
        </div>
      </v-col>
      <v-col cols="6" md="3" class="station_address">
        {{ station.addr_fi }}
      </v-col>
    </v-row>
    <v-dialog width="800" v-model="detailsOpened">
      <StationDetails :station="station"></StationDetails>
    </v-dialog>
  </v-card>
</template>

<script>
import StationDetails from '@/components/StationDetails.vue'
export default {
  props: ['station'],
  components: { StationDetails },
  data: () => ({
    detailsOpened: false
  })
}
</script>

<style lang="scss" scoped>
  .station {
    transition: transform .2s;

    &:hover {
      transform: scale(1.03, 1.1);
    }

    &_dialog {
      max-width: 100px !important;
    }

    &_header {
      padding-left: 2.5em;
      cursor: pointer;

      &--big {
        font-weight: 300;
        font-size: 1.5em;
      }

      &--small {
        font-weight: 300;
        font-size: 1em;
        color: rgb(154, 154, 154);
      }
    }

    &_address {
        font-weight: 300;
    }
  }
</style>
