<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      {{ newWord }}
    </div>
    <div>
      Down below is test flex-container
    </div>
    <div class="flex-container-test">
      <div class="box one"></div>
      <div class="box two"></div>
      <div class="box three"></div>
    </div>
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
.flex-container-test{
  display: flex;
  background: white;
  .box{
    width: 100px;
    min-width: 100px;
    height: 100px;
  }
  .one{
    background-color: red;
    flex-grow: 4;
  }
  .two{
    background-color: greenyellow;
    flex-grow: 2;
  }
  .three{
    background-color: blue;
    flex-grow: 6;
  }
}
.router-link-custom{
  &:hover{
    color: $white;
  }
}
</style>
