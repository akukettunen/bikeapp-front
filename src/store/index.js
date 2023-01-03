import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    trips: [],
    stations: [],
    tripsPageSize: 20,
    stationsPageSize: 20
  },
  mutations: {
    SET_TRIPS (state, trips) {
      state.trips = trips
    },
    SET_STATIONS (state, stations) {
      state.stations = stations
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    trips: state => state.trips,
    stations: state => state.stations,
    tripsPageSize: state => state.tripsPageSize,
    stationsPageSize: state => state.stationsPageSize
  }
})
