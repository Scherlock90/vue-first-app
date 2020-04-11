export default function makeUsersModule (api) {
  // const faresApi = api.get('fares');
  // const ordersApi = api.get('orders');

  const namespaced = true

  const state = {
    usersState: [
      { name: 'first user' },
      { name: 'second user' }
    ]
  }

  const getters = {}

  const mutations = {
    setUsers: (state, usersState) => {
      state.usersState = usersState
    }
  }

  const actions = {
    storeUsers: ({ commit }, usersState) => {
      commit('setUsers', usersState)
    }
  }

  return {
    namespaced,
    state,
    getters,
    mutations,
    actions
  }
}
