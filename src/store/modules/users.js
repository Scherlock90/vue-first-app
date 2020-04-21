import { ServiceFactory } from '../../api/ServiceFactory'

const userService = ServiceFactory.get('users')

export default function makeUsersModule () {
  // const faresApi = api.get('fares');
  // const ordersApi = api.get('orders');

  const namespaced = true

  const state = {
    usersState: []
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
    },
    storeUsersFromService: async ({ commit }) => {
      const { data } = await userService.get()
        .catch(err => console.error(err))
      await commit('setUsers', data)
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
