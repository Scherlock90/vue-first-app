<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/">Go to Home</router-link>
    <div class="v-model-textarea">
        <textarea v-model="testArea" rows="6" maxlength="72" />
        <div>
            {{ testArea }}
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      msg: 'Welcome to Test!',
      testArea: 'testing area v-model'
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
.v-model-textarea{
    padding: 1rem;
}
</style>
