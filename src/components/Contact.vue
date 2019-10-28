<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- this is solution how to comunnicate events beetwen components => parent to child -->
    <ChildComponent @sendMessageToParent="childMessageReceived" :messageTest="messTest"></ChildComponent>
    <b-button variant="outline-primary">
      <router-link to="/" class="router-link-custom">Go to Home</router-link>
    </b-button>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent'
import { BButton } from 'bootstrap-vue'

export default {
  name: 'Contact',
  components: {
    ChildComponent,
    'b-button': BButton
  },
  data () {
    return {
      msg: 'Welcome to Contact!',
      messTest: ''
    }
  },
  methods: {
    childMessageReceived () {
      this.messTest = 'Create something else'
      console.log('message from child')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
//variables
$white: #ffffff;

//main code
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
.router-link-custom{
  &:hover{
    color: $white;
  }
}
</style>
