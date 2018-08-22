import api from '../../api/imgur'

const state = {
  images: []
}

const getters = {
  allImages: state => state.images
}

const actions = {
  async fetchImages({ rootState, commit }) {
    const { token } = rootState.auth  // same as rootState.auth.token
    const response = await api.fetchImages(token)
    //console.log(response) // test only
    commit('setImages', response.data.data) //first data is axios, 2nd is Imgur API
  },
  async uploadImages({ commit }, images) {
    console.log(images)
  }
}

const mutations = {
  setImages: (state, images) => {
    state.images = images
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}