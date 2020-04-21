<template>
  <div id="grid-sections">
     <b-card
        overlay
        :img-src="src"
        :img-alt="title"
        :title="title"
      >
        <slot></slot>
      </b-card>
  </div>
</template>

<script>
import { BCard, BCardText } from 'bootstrap-vue'

export default {
  components: {
    'b-card': BCard,
    'b-card-text': BCardText
  },
  props: {
    title: { type: String, required: false },
    src: { type: String, required: true }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/app';

#grid-sections {
  height: 100%;
}

.card {
  height: 100%;
  color: lightcoral;

  .card-title {
    display: none;
  }

  &:hover {
    @include md {
    -ms-transform: scale(0.9);
    -moz-transform: scale(0.9);
    -webkit-transform: scale(0.9);
    -o-transform: scale(0.9);
    transform: scale(0.9);
    z-index: 1000;

  }

    .card-title {
      display: block !important;
    }
  }
}

.card-img {
  min-width: 310px;
  height: 100%;
}
</style>
