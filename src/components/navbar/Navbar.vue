<template>
    <div>
         <b-nav small>
            <b-nav-item to="/" active>Home</b-nav-item>
            <b-nav-item to="about-me">About Me</b-nav-item>
            <b-nav-item to="/contact">Contact</b-nav-item>
            <b-nav-item to="/blog">Blog</b-nav-item>
        </b-nav>
    </div>
</template>

<script>
import { BNav, BNavItem } from 'bootstrap-vue'

export default {
  components: {
    'b-nav-item': BNavItem,
    'b-nav': BNav
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
  display: flex;
  height: 15%;
  max-height: 50px;
  align-items: center;
}

.navbar.vue-fixed-header--isFixed {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
}
</style>
