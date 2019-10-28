<template>
  <div>
      <button @click="sendMessageToParent">
          Button to emit Events communication!
      </button>
      <div>
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

<style>

</style>
