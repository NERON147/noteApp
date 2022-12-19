import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: [
      {
        id: 1,
        title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, corrupti.',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia est tempora, accusantium non saepe velit quisquam culpa eius totam nam?'
      },
      {
        id: 2,
        title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, corrupti.',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia est tempora, accusantium non saepe velit quisquam culpa eius totam nam?'
      },
      {
        id: 3,
        title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, corrupti.',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia est tempora, accusantium non saepe velit quisquam culpa eius totam nam?'
      },
      {
        id: 4,
        title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, corrupti.',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia est tempora, accusantium non saepe velit quisquam culpa eius totam nam?'
      },
    ]
  },
  getters: {
    NOTES(state) {
      return state.notes
    },
    GET_NOTES: (state) => (id) => {
      return state.notes.find(note => note.id == id)
    }
  },
  mutations: {
    addToNote(state, note) {
      state.notes.push(note)
      localStorage.setItem('note', JSON.stringify(state.notes))
    },
    deleteNote(state, index) {
      state.notes.splice(index, 1)
      localStorage.setItem('note', JSON.stringify(state.notes))
    },
    update_notes(state, note) {
      state.notes = note
    }
  },
  actions: {
    addToNote({ commit }, note) {
      commit('addToNote', note)
    },
    delNote({ commit }, index) {
      commit('deleteNote', index)
    },
    setNoteFromLC({ commit }, note) {
      commit('update_notes', note)
    },
  }
})
