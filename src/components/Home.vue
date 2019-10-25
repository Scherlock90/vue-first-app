<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      {{ newWord }}
    </div>
    <div>
      <router-link to="/Contact">Go to Contact</router-link>
    </div>
    <div>
      <router-link to="/Test">Go to Test</router-link>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './Footer'

export default {
  name: 'Home',
  components: {
    Footer
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App!',
      newWord: 'Something'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
