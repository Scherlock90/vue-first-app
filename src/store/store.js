import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import router from '../router'

// import makeQuickBookingModule from '@store/modules/quickBooking';
// import makeUserModule from '@store/modules/user';
import makeUserModule from './modules/users'

Vue.use(Vuex)

export default function makeStore (api, initialConfig = {}) {
  const vuexLocal = new VuexPersistence({
    strictMode: true,
    key: 'storedCurrency',
    reducer: (state) => ({
      config: {
        currency: state.config.currency
      }
    }),
    storage: window.localStorage,
    filter: (mutation) => mutation.type === 'config/setCurrency'
  })
  return new Vuex.Store({
    state: {},
    getters: {},
    mutations: {
      RESTORE_MUTATION: vuexLocal.RESTORE_MUTATION
    },
    actions: {
      routerPush (_, arg) {
        router.push(arg)
      }
    },
    modules: {
      users: makeUserModule(api)
    },
    plugins: [vuexLocal.plugin]
  })
}
