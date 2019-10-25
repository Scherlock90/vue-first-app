<template>
  <div id="footer-container">
    <div class="footer">
      <div>
        {{ footerText }}
      </div>
      <div>
        Testing props: {{ testProps }}
      </div>
      <div>
        Next props: {{ nextProps }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    testProps: [String, Number],
    nextProps: {
      type: String,
      required: true,
      default: 'Default prop'
    }
  },
  data () {
    return {
      footerText: 'Footer is a test sharing components'
    }
  }
}
</script>

<style lang="scss" scoped>
  #footer-container{
    display: flex;
    justify-content: center;
    align-items: center;
    .footer{
        margin-top: 1rem;
        background: rgb(187, 67, 67);
        color: #ffffff;
        display: grid;
        align-items: center;
        justify-content: center;
        width: 30%;
        height: 100px;
    }
  }
</style>
