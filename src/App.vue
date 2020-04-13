<template>
  <div id="app">
    <fixed-header>
    <div class="navbar">
      <navbar />
    </div>
  </fixed-header>
  <div class="container-router">
    <router-view/>
  </div>
  <Footer></Footer>
  </div>
</template>

<script>
import FixedHeader from 'vue-fixed-header'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

export default {
  components: {
    FixedHeader,
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
@import './assets/styles/app';

body {
  height: 100vh;
  background-color: $background-color !important;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 97vh;
  background-color: $background-color;
}

.container-router{
  min-height: 95%;
  background: #ffffff;

  @include sm-max {
    min-height: 88vh;
  }
}
</style>
