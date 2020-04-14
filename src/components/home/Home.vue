<template>
  <div id="home-container">
    <h1>{{ msg }}</h1>
    <sections sectionName="Repository" sectionId="repository">
      <div class="tech-stack-container">
        <div class="transition-element" v-for="repo in repoArray" :key="repo.path">
          <grid-sections :title="repo.title" :src="require(`../../assets/images/repo-images/${repo.path}`)" >
            <!-- <b-card-text>
              txt
            </b-card-text> -->
          </grid-sections>
        </div>
      </div>
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
import Sections from './sections/Sections'
import GridSections from './grid-sections/GridSections'

export default {
  components: {
    'grid-sections': GridSections,
    'sections': Sections
  },

  data () {
    return {
      msg: 'SEN JS SEBASTIAN NAPORA',
      techStackArray: [
        { path: 'ts.png', title: 'TypeScript' },
        { path: 'JS.png', title: 'JavaScript' },
        { path: 'React.png', title: 'React.js' },
        { path: 'vue.png', title: 'Vue.js' },
        { path: 'webpack.png', title: 'Webpack' },
        { path: 'sass.png', title: 'Sass' }
      ],
      repoArray: [
        { path: 'api-redux.png', title: 'API Blog' },
        { path: 'task-charts.png', title: 'Dashboard With Charts' },
        { path: 'flex-panel-gallery.png', title: 'Dashboard With Charts' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/app';

#home-container {
  height: 100%;
}

#tech-stack, #repository {
  padding: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tech-stack-container {

  .transition-element{
    width: 320px;
  }

  @include md {
    display: grid;
    justify-content: center;
    grid-template-columns: 320px 320px 320px;
    grid-template-rows: auto;
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
