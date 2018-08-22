import api from '../../api/imgur'
import { router } from '../../main'

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
  async uploadImages({ rootState }, images) {
    // Get access token
    const { token } = rootState.auth
    // Call Imgur API module to perform upload
    await api.uploadImages(images, token)
    // Redirect user to ImageList component
    router.push('/')
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