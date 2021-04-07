import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    editions: {},
    location: {},
    quran: {},
    prayerTimes: {},
    hijriCalender: {},
  },
  mutations: {
    setLocation(state, payload) {
      state.location = payload;
    },
    setEditions(state, payload) {
      state.editions = payload;
    },
    setQuranData(state, payload) {
      state.quran = payload;
    },
  },
  actions: {
    addLocation({ commit }, payload) {
      commit("setLocation", payload);
    },
    addEditions({ commit }, payload) {
      commit("setEditions", payload);
    },
    addQuranData({ commit }, payload) {
      commit("setQuranData", payload);
    },
  },
  getters: {
    getAllEditions: (state) => {
      return state.editions;
    },
    getQuran: (state) => {
      return state.quran;
    },
  },
  modules: {},
});
