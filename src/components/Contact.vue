<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      {{ newWord }}
    </div>
    <ChildComponent @sendMessageToParent="childMessageReceived" :messageTest="mess"></ChildComponent>
    <router-link to="/">Go to Home</router-link>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent'

export default {
  name: 'Contact',
  components: {
    ChildComponent
  },
  data () {
    return {
      msg: 'Welcome to Contact!',
      newWord: 'Something',
      mess: ''
    }
  },
  methods: {
    childMessageReceived () {
      this.mess = 'Create something else'
      console.log('message from child')
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
