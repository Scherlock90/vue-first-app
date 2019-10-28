<template>
  <div id="container-child-component">
      <button @click="sendMessageToParent" class="button-event-communicate">
          Button to emit Events communication!
      </button>
      <div class="events-communicate-text">
          {{ messageTest }}
      </div>
  </div>
</template>

<script>
export default {
  name: 'ChildComponent',
  props: {
    messageTest: String
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
    .button-event-communicate{
        cursor: pointer;
        background-color:lightgreen;
        color: black;
        font-size: 22px;
        width: 200px;
        border: 4px solid black;
    }
    .events-communicate-text{
        margin: $margin;
        color: red;
    }
}
</style>
