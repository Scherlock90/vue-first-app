<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      {{ newWord }}
    </div>
    <div>
      Down below is test flex-container
    </div>
    <div class="flex-container-test">
      <div class="box one"></div>
      <div class="box two"></div>
      <div class="box three"></div>
    </div>
    <router-link to="/">Go to Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      msg: 'Welcome to Contact!',
      newWord: 'Something'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.flex-container-test{
  display: flex;
  background: white;
  .box{
    width: 100px;
    height: 100px;
  }
  .one{
    background-color: red;
    flex-grow: 4;
  }
  .two{
    background-color: greenyellow;
    flex-grow: 2;
  }
  .three{
    background-color: blue;
    flex-grow: 6;
  }
}
</style>
