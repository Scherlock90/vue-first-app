<template>
  <div id="footer-container">
    <div class="footer">
      <div>
        {{ footerText }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      footerText: 'Design SeN'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/app';

  #footer-container{
    display: flex;
    align-items: flex-end;
    height: 4vh;
    width: 100%;

    @include sm-max {
      height: 5vh;
    }

    .footer{
        background: rgb(187, 67, 67);
        color: #ffffff;
        display: grid;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }
  }
</style>
