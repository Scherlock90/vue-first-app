<template>
  <div id="container-blog">
    <div>
      Blog
    </div>
    <div v-for="user in users[0]" :key="user.name">
      {{ user.name }}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import * as ns from '../../store/namespaces'
// import { ServiceFactory } from '../../api/ServiceFactory'

// const UserService = ServiceFactory.get('users')

export default {
  computed: {
    ...mapState(ns.USERS, ['usersState']),
    ...mapActions(ns.USERS, ['storeUsers']),
    hasUsers: {
      get () {
        return this.usersState
      },
      set (value) {
        this.storeUsers(value)
      }
    }
  },
  data () {
    return {
      users: []
    }
  },
  created () {
    this.updateUsers()
  },
  mounted () {
    this.updateUsers()
    console.log(this.usersState)
    console.log('this update')
  },
  updated () {
    console.log(this.users)
    this.updateUsers()
  },

  methods: {
    ...mapActions({setUser: 'users/storeUsers', userFromApi: 'users/storeUsersFromService'}),
    updateUsers () {
      // this.setUser({ name: 'third user' })
      try {
        this.userFromApi()
      } catch (err) {
        console.log(err)
      }
      // const { data } = await UserService.get()
      // console.log(data)

      this.users = this.hasUsers
    }
  }
}
</script>

<style lang="scss" scope>
$margin: 1rem;
#container-blog{
    height: 90%;
}
</style>
