<template>
  <div id="home-container">
    <sections sectionName="Repository" sectionId="repository">
      <b-card
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="github repository"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
    <b-button href="#" variant="primary">GITHUB REPOSITORY</b-button>
  </b-card>
    </sections>
    <sections sectionName="Tech Stack" sectionId="tech-stack">
      <div class="tech-stack-container">
        <div class="transition-element" v-for="stack in techStackArray" :key="stack.path">
          <grid-sections :title="stack.title" :src="require(`../../assets/images/tech-stack/${stack.path}`)"/>
        </div>
      </div>
    </sections>
  </div>
</template>

<script>
import { BCard, BCardText } from 'bootstrap-vue'

import Sections from './sections/Sections'
import GridSections from './grid-sections/GridSections'

export default {
  components: {
    'grid-sections': GridSections,
    'sections': Sections,
    'b-card': BCard,
    'b-card-text': BCardText
  },

  data () {
    return {
      techStackArray: [
        { path: 'ts.png', title: 'TypeScript' },
        { path: 'JS.png', title: 'JavaScript' },
        { path: 'React.png', title: 'React.js' },
        { path: 'vue.png', title: 'Vue.js' },
        { path: 'webpack.png', title: 'Webpack' },
        { path: 'sass.png', title: 'Sass' }
      ],
      repoArray: [
        { path: 'flex-panel-gallery.png', title: 'Flex Panel Gallery' },
        { path: 'my-wedding-page.png', title: 'My Wedding Page' },
        { path: 'api-redux.png', title: 'API Blog' },
        { path: 'photo-modifier.png', title: 'Photo Modifier' },
        { path: 'task-charts.png', title: 'Dashboard With Charts' },
        { path: 'cities-changer.png', title: 'Cities Changer' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/app';

#home-container {
  height: 100%;
  background-color: $main-color;
}

#tech-stack, #repository {
  padding: 2% 2%;
  display: grid;
  justify-content: center;
  align-items: center;
}

#repository {
  margin-right: auto;
  margin-left: auto;
  max-height: 1400px;
  max-width: 1800px;
}

.tech-stack-container {

  .transition-element{
    width: 320px;
  }

  @include md {
    display: grid;
    justify-content: center;
    grid-template-columns: 320px 320px 320px;
    grid-template-rows: 320px 320px 320px;
  }

  @include sm-max {
    overflow: auto;
    display: flex;
    grid-template-columns: none;
  }
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
