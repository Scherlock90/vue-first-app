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
  #footer-container{
    display: flex;
    align-items: flex-end;
    height: 6%;

    .footer{
        margin-top: 1rem;
        background: rgb(187, 67, 67);
        color: #ffffff;
        display: grid;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: 20%;
    }
  }
</style>
