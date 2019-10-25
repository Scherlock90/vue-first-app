<template>
  <div class="footer">
      {{ footerText }}
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      footerText: 'Footer is a test sharing components'
    }
  }
}
</script>

<style>
    .footer{
        margin-top: 1rem;
        background: rgb(187, 67, 67);
        color: #ffffff;
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
