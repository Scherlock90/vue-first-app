<template>
  <div id="app">
    <div class="container-app">
      <img src="./assets/logo.png">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  .container-app{
    display: grid;
    margin-left: 50%;
    margin-right: 50%;
  }
}
</style>
