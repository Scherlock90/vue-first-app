<template>
  <div id="container-blog">
    <div class="outer-container blog-page">
      <div class="container-fluid">
          <div class="row">
            <cards
              v-for="post in users"
              :key="post.path"
              :pathToImage="require(`../../assets/images/tech-stack/` + post.path)"
              :nameAuthor="post.name"
              :description="post.description"
              :title="post.title"
              :className="post.className"
            />
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import * as ns from '../../store/namespaces'
import Cards from './cards/Cards'

export default {
  components: {
    'cards': Cards
  },

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
      users: [],
      posts: [
        { id: 1, path: 'github.png', className: ['blog-content flex'], title: 'My repository', description: 'My github repository', redirect: 'https://github.com/Scherlock90' },
        { id: 2, path: 'typescript.png', className: ['blog-content flex'], title: 'TypeScript', description: 'My tech stack' },
        { id: 3, path: 'javascript.png', className: ['blog-content flex flex-xl-row-reverse'], title: 'JavaScript', description: 'My tech stack' },
        { id: 4, path: 'react-js.png', className: ['blog-content flex flex-row-reverse'], title: 'React.js', description: 'My tech stack' },
        { id: 5, path: 'redux.png', className: ['blog-content flex'], title: 'Redux', description: 'My tech stack' },
        { id: 6, path: 'vue.png', className: ['blog-content flex'], title: 'Vue.js', description: 'My tech stack' },
        { id: 7, path: 'kentico.png', className: ['blog-content flex flex-xl-row-reverse'], title: 'Kentico Cloud CMS', description: 'My tech stack' },
        { id: 8, path: 'lerna-js.png', className: ['blog-content flex flex-row-reverse'], title: 'Lerna.js', description: 'My tech stack' },
        { id: 9, path: 'vuex.png', className: ['blog-content flex'], title: 'Vuex', description: 'My tech stack' },
        { id: 10, path: 'travis-ci.png', className: ['blog-content flex'], title: 'Travis CI', description: 'My tech stack' }
      ]
    }
  },

  created () {
    this.updateUsers()
  },

  async mounted () {
    await this.updateUsers()
  },

  methods: {
    ...mapActions({setUser: 'users/storeUsers', userFromApi: 'users/storeUsersFromService'}),

    async updateUsers () {
      try {
        await this.userFromApi()
      } catch (err) {
        console.log(err)
      }
      this.users = this.hasUsers
      this.mergingArrays()
    },
    mergingArrays () {
      const mergeArray = this.users.map(item => {
        if (this.posts.filter(it => it.id === item.id)) {
          return {
            ...item,
            path: this.filterArray(item.id, 'path'),
            className: this.filterArray(item.id, 'className'),
            description: this.filterArray(item.id, 'description'),
            title: this.filterArray(item.id, 'title')
          }
        } else return { ...item, path: 'none' }
      })

      this.users = mergeArray
    },
    filterArray (itemId, resultItem) {
      return this.posts
        .map(it => it.id === itemId && it[resultItem])
        .filter(item => item !== false)[0]
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
