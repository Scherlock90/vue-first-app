<template>
  <div :id="id" class="col-12 col-md-6 col-lg-3">
    <div class="portfolio-content">
      <figure>
        <img class="image-home" :src="pathToImage" :alt="nameImage" />
      </figure>
      <div class="entry-content flex flex-column align-items-center justify-content-center">
        <h3>
          <a :href="redirect">{{ title }}</a>
        </h3>
        <ul class="flex flex-wrap justify-content-center">
          <li>{{ description }}</li>
        </ul>
      </div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  props: {
    id: { type: String, required: false },
    pathToImage: { type: String, required: true },
    nameImage: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    redirect: { type: String, required: false }
  }
}
</script>

<style lang="scss" scoped></style>
