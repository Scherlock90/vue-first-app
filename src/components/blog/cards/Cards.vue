<template>
  <div class="col-12 col-xl-6 no-padding">
    <div :class="className">
      <figure>
        <a href="#">
          <img :src="pathToImage" alt="title">
        </a>
      </figure>
      <div class="entry-content flex flex-column justify-content-between align-items-start">
        <header>
          <h3>
            <a href="#">
              {{ title }}
            </a>
          </h3>
          <div class="posted-by">
            {{ nameAuthor }}
          </div>
        </header>
        <footer class="flex flex-wrap align-items-center">
          <div class="posted-on">
            {{ created }}
          </div>
          <ul class="flex flex-wrap align-items-center">
            <li><a href="#">
              {{ description }}
            </a></li>
          </ul>
        </footer>
      </div><!-- .entry-content -->
    </div><!-- .blog-content -->
  </div>
</template>

<script>

export default {
  props: {
    pathToImage: { type: String, required: false },
    nameAuthor: { type: String, required: false },
    title: { type: String, required: false },
    description: { type: String, required: false },
    className: { type: Array, required: false },
    created: { type: String, required: false }
  }
}
</script>

<style lang="scss" scoped>

.blog-page .blog-content figure img {
  background-color: #fff;
}

.blog-page .blog-content header {
  text-align: left;
}
</style>
