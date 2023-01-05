import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseUrl: 'http://localhost:8000',
    trips: [],
    stations: [],
    tripsPage: 1,
    stationsPage: 1,
    tripsPageSize: 20,
    stationsPageSize: 20
  },
  mutations: {
    SET_TRIPS (state, trips) {
      state.trips = trips
    },
    SET_STATIONS (state, stations) {
      state.stations = stations
    },
    SET_TRIPS_PAGE (state, page) {
      state.tripsPage = page
    },
    SET_STATIONS_PAGE (state, page) {
      state.stationsPage = page
    }
  },
  actions: {
    getStations ({ getters, commit }, page = 1) {
      axios.get(`${getters.baseUrl}/stations?limit=${getters.stationsPageSize}&offset=${(page - 1) * getters.stationsPageSize}`)
        .then(e => {
          commit('SET_STATIONS', e.data)
        })
    },
    getTrips ({ commit, getters }, page = 1) {
      axios.get(`${getters.baseUrl}/trips?limit=${getters.tripsPageSize}&offset=${(page - 1) * getters.tripsPageSize}`)
        .then(e => {
          commit('SET_TRIPS', e.data)
        })
    },
    getStationDetails ({ commit, getters }, id) {
      return new Promise((resolve, reject) => {
        axios.get(`${getters.baseUrl}/stations/${id}`)
          .then(e => {
            resolve(e.data)
          })
          .catch(e => reject(e))
      })
    },
    changeTripsPage ({ commit, dispatch }, page) {
      dispatch('getTrips', page)
      commit('SET_TRIPS_PAGE', page)
    },
    changeStationsPage ({ commit, dispatch }, page) {
      dispatch('getStations', page)
      commit('SET_STATIONS_PAGE', page)
    }
  },
  modules: {
  },
  getters: {
    trips: state => state.trips,
    stations: state => state.stations,
    tripsPageSize: state => state.tripsPageSize,
    stationsPageSize: state => state.stationsPageSize,
    tripsPage: state => state.tripsPage,
    stationsPage: state => state.stationsPage,
    baseUrl: state => state.baseUrl
  }
})
