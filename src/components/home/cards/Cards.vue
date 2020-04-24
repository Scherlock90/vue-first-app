<template>
  <div class="col-12 col-md-6 col-lg-3 no-padding">
    <div class="portfolio-content">
      <figure>
          <img class="image-home" :src="pathToImage" :alt="nameImage">
      </figure>
      <div class="entry-content flex flex-column align-items-center justify-content-center">
        <h3><a :href="redirect">{{ title }}</a></h3>
        <ul class="flex flex-wrap justify-content-center">
          <li>{{ description }}</li>
        </ul>
      </div><!-- .entry-content -->
    </div><!-- .portfolio-content -->
  </div>
</template>

<script>

export default {
  props: {
    pathToImage: { type: String, required: true },
    nameImage: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    redirect: { type: String, required: false }
  }
}
</script>

<style lang="scss" scoped>
  /* .image-home {
    width: 340px;
    height: 340px;
  } */

</style>
