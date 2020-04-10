<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      {{ newWord }}
    </div>
    <div>
      Down below is test flex-container
    </div>
    <ChildComponent @sendMessageToParent="childMessageReceived" :messageTest="messTest"></ChildComponent>
    <b-button variant="outline-primary">
      <router-link to="/" class="router-link-custom">Go to Home</router-link>
    </b-button>
  </div>
</template>

<script>
import ChildComponent from '../ChildComponent'
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

<style lang="scss" scoped>
$white: #ffffff;

//main code
.flex-container-test{
  display: flex;
  justify-content: center;
  background: white;
  flex-wrap: wrap;

  .box{
    width: 320px;
    height: 100px;
    flex: 1 0 200px;
  }
}

.router-link-custom{

  &:hover{
    color: $white;
  }
}
</style>
