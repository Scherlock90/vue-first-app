<template>
  <div id="container-blog">
    <div>
      Blog
    </div>
    <div v-for="user in users" :key="user.name">
      {{ user.name }}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import * as ns from '../../store/namespaces'

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
  mounted () {
    console.log(this.usersState)
    console.log(this.$store.state.users.usersState)
    this.updateUsers(this.usersState)
    console.log(this.$data.users)
  },
  methods: {
    ...mapActions({setUser: 'users/storeUsers'}),
    updateUsers () {
      this.setUser({ name: 'third user' })

      this.$data.users = this.hasUsers
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
