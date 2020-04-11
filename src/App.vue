<template>
  <div id="app">
    <fixed-header>
    <div class="navbar">
      <navbar />
    </div>
  </fixed-header>
  <router-view/>
  <Footer></Footer>
  </div>
</template>

<script>
import FixedHeader from 'vue-fixed-header'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer'

export default {
  components: {
    FixedHeader,
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
body {
  height: 100vh;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

.navbar {
  background-color: lightgrey;
  height: 15%;
  display: flex;
  align-items: center;
}

.navbar.vue-fixed-header--isFixed {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
}
</style>
