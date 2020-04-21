<template>
    <div :id="carouselId">
        <b-carousel
            v-model="slide"
            :interval="100000000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
        >

            <b-carousel-slide v-for="repo in this.objectCarousel" :key="repo.path"
                :img-src="require(`../../../assets/images/repo-images/${repo.path}`)"
            ></b-carousel-slide>

        </b-carousel>

        <!-- <p class="mt-4">
            Slide #: {{ slide }}<br>
            Sliding: {{ sliding }}
        </p> -->
    </div>
</template>

<script>
import { BCarousel, BCarouselSlide } from 'bootstrap-vue'

export default {
  components: {
    'b-carousel': BCarousel,
    'b-carousel-slide': BCarouselSlide
  },

  props: {
    objectCarousel: { type: Array, required: true },
    carouselId: { type: String, required: true }
  },

  data () {
    return {
      slide: 0,
      sliding: null
    }
  },

  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/app';

</style>
