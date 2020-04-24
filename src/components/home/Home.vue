<template>
  <div id="home-container">
    <div class="outer-container home-page">
    <div class="container-fluid">
        <div class="row">
          <cards
            v-for="stack in techStackArray"
            :key="stack.path"
            :pathToImage="require(`../../assets/images/tech-stack/${stack.path}`)"
            :nameImage="stack.title"
            :description="stack.description"
            :title="stack.title"
            :redirect="stack.redirect"
          />
        </div><!-- .row -->
    </div><!-- .container-fluid -->
</div>
  </div>
</template>

<script>
import Cards from './cards/Cards'

export default {
  components: {
    'cards': Cards
  },

  data () {
    return {
      techStackArray: [
        { path: 'github.png', title: 'My repository', description: 'My github repository', redirect: 'https://github.com/Scherlock90' },
        { path: 'ts.png', title: 'TypeScript', description: 'My tech stack' },
        { path: 'js.png', title: 'JavaScript', description: 'My tech stack' },
        { path: 'react.png', title: 'React.js', description: 'My tech stack' },
        { path: 'redux.png', title: 'Redux', description: 'My tech stack' },
        { path: 'vue.png', title: 'Vue.js', description: 'My tech stack' },
        { path: 'vuex.png', title: 'Vuex', description: 'My tech stack' },
        { path: 'kentico.png', title: 'Kentico Cloud CMS', description: 'My tech stack' },
        { path: 'lerna-js.png', title: 'Lerna.js', description: 'My tech stack' },
        { path: 'travis-ci.png', title: 'Travis CI', description: 'My tech stack' },
        { path: 'webpack.png', title: 'Webpack', description: 'My tech stack' },
        { path: 'sass.png', title: 'Sass', description: 'My tech stack' },
        { path: 'styled-components.png', title: 'Styled components', description: 'My tech stack' },
        { path: 'bootstrap.png', title: 'Bootstrap', description: 'My tech stack' }
      ]
    }
  },

  methods: {
    goToRepository () {
      window.location.href = 'https://github.com/Scherlock90'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/app';

#home-container {
  height: 100%;
  padding: 0 0 0 5%;
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
  max-width: 1400px;

  .repo {
    cursor: pointer;
  }

  .card-text{
    font-size: $mobile-font-size;
    color: $second-color;
  }
}

.tech-stack-container {

  .transition-element{
    width: 240px;
  }

  @include md {
    display: grid;
    justify-content: center;
    grid-template-columns: 240px 240px 240px;
    grid-template-rows: 240px 240px 240px;
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
