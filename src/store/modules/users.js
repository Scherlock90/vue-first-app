import { ServiceFactory } from '../../api/ServiceFactory'

const userService = ServiceFactory.get('users')

export default function makeUsersModule () {
  const namespaced = true

  const state = {
    usersState: []
  }

  const getters = {}

  const mutations = {
    setUsers: (state, newUsersState) => {
      state.usersState = newUsersState
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
