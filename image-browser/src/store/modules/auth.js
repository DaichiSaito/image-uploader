const state = {
  token: null // initial value of token at page load
}

const getters = {
  isLoggedIn: state => !!state.token // change 'state' to a boolean; returns true if not null
}

// actions call mutations. They always require an object with at least the commit property
// the commit property is required to call mutations, the whole purpose of actions
const actions = {
  logout: ({ commit }) => {
    commit('setToken', null)
  }
}

// in any mutation, state is always the first argument,
// followed by as many as necessary. In this case, since the
// the property being mutated is token, we pass that in as
// the second argument
const mutations = {
  setToken: (state, token) => {
    state.token = token
  }
}