<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      {{ newWord }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Vue.js App!',
      newWord: 'Something'
    }
  }
}
</script>

<style scoped>
.hello{
  height: 90%;
}

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
