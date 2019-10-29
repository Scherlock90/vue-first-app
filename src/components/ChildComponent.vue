<template>
  <div id="container-child-component">
      <b-button variant="outline-primary" @click="sendMessageToParent">
          Button to emit Events communication!
      </b-button>
      <div class="events-communicate-text">
          {{ messageTest }}
      </div>
  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue'

export default {
  name: 'ChildComponent',
  props: {
    messageTest: String
  },
  components: {
    'b-button': BButton
  },
  methods: {
    sendMessageToParent () {
      this.$emit('sendMessageToParent')
    }
  }
}
</script>

<style lang="scss" scope>
$margin: 1rem;
#container-child-component{
    margin: $margin;
    .events-communicate-text{
        margin: $margin;
        color: red;
    }
}
</style>
