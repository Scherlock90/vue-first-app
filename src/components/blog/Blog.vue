<template>
  <div id="container-blog">
    <div>
      Blog
    </div>
    <div>
      {{ hasUsers.map(user => user.name) }}
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
        return this.$store.state.users.usersState
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
    console.log('Blog')
    console.log(this.usersState)
    console.log(this.$store.state.users.usersState)
  }
  // methods: {
  //   ...mapActions(ns.USERS, ['storeUsers'])
  // }
}
</script>

<style lang="scss" scope>
$margin: 1rem;
#container-blog{
    height: 90%;
}
</style>
