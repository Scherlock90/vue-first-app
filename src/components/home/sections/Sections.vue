<template>
  <section :id="sectionId">
     <h1 class="header-section">{{ sectionName }}</h1>
     <slot></slot>
  </section>
</template>

<script>
import { BCard, BCardText } from 'bootstrap-vue'

export default {
  components: {
    'b-card': BCard,
    'b-card-text': BCardText
  },
  props: {
    sectionId: { type: String, required: true },
    sectionName: { type: String, required: true }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/app';

.header-section {
  writing-mode: vertical-rl;
  text-orientation: upright;

   @include sm-max {
    font-size: 160%;
  }
}
</style>
