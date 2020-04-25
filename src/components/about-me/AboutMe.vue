<template>
  <div id="about-container">
    <cards
        v-for="stack in aboutMeArray"
        :key="stack.pathToImage"
        :id="stack.id"
        :pathToImage="require(`../../assets/images/about-me/` + stack.pathToImage)"
        :nameImage="stack.title"
        :description="stack.description"
        :title="stack.title"
        :redirect="stack.redirect"
    />
  </div>
</template>

<script>
import Cards from '../common/cards/Cards'

export default {
  components: {
    'cards': Cards
  },
  data () {
    return {
      aboutMeArray: [
        { id: 'first', pathToImage: 'sen.jpg', title: 'Sebastian Napora', description: 'It s me!' },
        {
          id: 'second',
          pathToImage: 'programming.jpg',
          title: 'My Programming',
          description:
            'I lern and programming since 3 years. I started with Java for 6 months, next I try C# from 3 months, and finally I tried React.js for 1,5 years.' +
            'At now I lerned how to used Vue.js in application, and dive deeper in React with Typescript because I think Typescript prevents many mistakes.'
        },
        {
          id: 'third',
          pathToImage: 'bjj.jpg',
          title: 'Hobby',
          description: 'I train for 5 years Brazilian Jiu-Jitsu, and sometimes I will try to play with friend into Voleyball or on the Xbox.'
        },
        {
          id: 'fourth',
          pathToImage: 'github.png',
          title: 'My Github Repository',
          description: 'Please click if you want see',
          redirect: 'https://github.com/Scherlock90'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/styles/app";

#about-container {
  min-height: 100vh;
  position: absolute;

  #center {
      position: absolute;
      font-size: 3rem;
      right: 42rem;
      top: 27rem;
      color: black;
      z-index: 1000000000000000000000;
  }

  @include sm-min {

    padding: 4% 2%;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;

    .col-md-6 {
        max-width: 100%;
    }
  }

  @include lg {
    padding: 2% 0 2% 10%;
    display: grid;
    justify-content: center;
    align-items: center;

    .portfolio-content {
        figure {
            img {
                border-radius: 100%;
            }
        }
    }

     #first {
        order: 0;
        position: relative;
        left: 5rem;
    }

    #second {
        order: 1;
        position: relative;
        left: 25rem;
    }

    #third {
        order: 2;
        position: relative;
        left: 5rem;
    }

    #fourth {
        order: 3;
        position: relative;
        left: 25rem;
    }

    .col-md-6 {
        max-width: 50% !important;
    }
  }

  @include xl {
     #first {
        order: 0;
        position: relative;
        left: 10rem;
    }

    #second {
        order: 1;
        position: relative;
        left: 30rem;
    }

    #third {
        order: 2;
        position: relative;
        left: 10rem;
    }

    #fourth {
        order: 3;
        position: relative;
        left: 30rem;
    }
  }

  @include sm-max {
    padding: 4% 2%;
    display: grid;
  }
}
</style>
