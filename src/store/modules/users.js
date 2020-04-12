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
    setUsers: (state, newUsersState) => {
      state.usersState = [...state.usersState, newUsersState]
    }
  }

  const actions = {
    storeUsers: ({ commit }, newUsersState) => {
      commit('setUsers', newUsersState)
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
