<template>
  <div class="test">
    <h1>{{ msg }}</h1>
    <router-link to="/">Go to Home</router-link>
    <div class="v-model-textarea padding-container">
        <textarea v-model="testArea" rows="6" maxlength="72" />
        <div>
            {{ testArea }}
        </div>
    </div>
    <!-- test v-model -->
    <div class="container-checked-names padding-container">
        <input type="checkbox" id="sebastian" value="Sebastian" v-model="checkedNames" />
        <label for="sebastian">Sebastian</label>
        <input type="checkbox" id="natalia" value="Natalia" v-model="checkedNames" />
        <label for="natalia">Natalia</label>
        <input type="checkbox" id="kamil" value="Kamil" v-model="checkedNames" />
        <label for="kamil">Kamil</label>
        <div class="checked-names">
            Checked names: {{ checkedNames }}
        </div>
    </div>
    <!-- test  v-for loops -->
    <div class="container-checked-names padding-container">
        <span v-for="(option, index) in options" v-bind:option="option" :key="index">
        <input type="checkbox" :id="option.value" :value="option.value"  v-model="checkedNamesOtherSolution"/>
        <label for="option.value">
            {{ index}}. {{ option.value }}
        </label>
        </span>
        <div class="checked-names">
            Checked names options: {{ checkedNamesOtherSolution }}
        </div>
    </div>
    <div class="container-show-button-if padding-container">
        <div class="show-button">Show Button Test !</div>
        <!-- test v-model -> two way binding -->
        <textarea v-model="showButtonIfIWriteSomething"></textarea>
        <div>
            <button class="button-show-if" type="sumbit" v-if="showButtonIfIWriteSomething">
                Let You see Me!
            </button>
        </div>
        <!-- test v-bind or : -->
        <div>
            <input type="radio" id="yes" value="yes" v-model="toggleText"/>
            <label for="no" :class="[toggleText === 'yes' ? activeClass: '']">Yes!</label>
            <input type="radio" id="no" value="no" v-model="toggleText"/>
            <label for="no">No!</label>
        </div>
        <!-- test v-if v-else -->
        <div v-if="toggleText">
            <p v-if="toggleText === 'yes'">
                Yeah, great!
            </p>
            <p v-else>
                No, isn't working!
            </p>
        </div>
        <!-- test v-pre -->
        <div>
            <span v-pre>
                To decoumantion {{ vPreTest }}
            </span>
            <pre>
                All Data: {{ $data }}
            </pre>
            <pre>
                vPreTest: {{ $data.vPreTest }}
            </pre>
        </div>
        <div>
            <div>
                <!-- v-on = binding event -->
                <button v-on:click="counter += 1">+</button>
                <!-- @ shortcut to v-on: -->
                <button @click="counter > 0 ? counter -= 1 : 0">-</button>
            </div>
            <div>
                Counter: {{ counter }}
            </div>
            <!-- test v-html -->
            <div v-html="testHtmlElements"></div>
            <!-- test v-text -->
            <div v-text="showButtonIfIWriteSomething"></div>
        </div>
        <!-- test methods binding -->
        <div>
            <div>
                <button @click="increment">+</button>
                <button @click="decrement">-</button>
            </div>
            <div>
                Test counter with binding methods: {{ counterMethods }}
            </div>
        </div>
        <div class="container-mousemove-change-background" :style="{ backgroundColor: `hsl(${x}, 80%, 50%` }" @mousemove="xCoordinate">
            This is the box events mousemove change background!
        </div>
        <div class="padding-container">
            Your name:  <input v-model.lazy="userName"/>
            <div v-if="userName"> Initial Value: {{ userName }}</div>
            <div v-if="userName"> Computed Value: {{ greeting }} </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      msg: 'Welcome to Test!',
      testArea: 'testing',
      checkedNames: [],
      checkedNamesOtherSolution: [],
      options: [
        {value: 'Sebastian Opt'},
        {value: 'Natalia Opt'},
        {value: 'Kamil Opt'}
      ],
      showButtonIfIWriteSomething: '',
      toggleText: 'yes',
      activeClass: 'button-show-if',
      vPreTest: 'v-pre test',
      counter: 0,
      testHtmlElements: 'test <a href="https://vuejs.org/">v-html</a>',
      counterMethods: 0,
      x: 0,
      userName: ''
    }
  },
  props: {
    title: String
  },
  methods: {
    increment () {
      this.counterMethods++
    },
    decrement () {
      this.counterMethods--
    },
    xCoordinate (e) {
      this.x = e.clientX
    }
  },
  computed: {
    greeting () {
      return `You're a monster, ${this.userName}`
    }
  },
  watch: {
    counter () {
      console.log('The counter is changed!')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
//variable
$color-white: #ffffff;
$color-red: rgb(247, 5, 5);
$color-dark: rgb(12, 12, 12);
$color-href: #42b983;
//main code
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
  color: $color-href;
}
.test{
    display: grid;
    justify-content: center;
    align-items: center;
}
.padding-container{
    padding: 1rem;
}
.v-model-textarea{
    border-top:  2px  solid $color-red;
}
.container-checked-names{
    border-top: 2px solid $color-dark;
    width: 100%;
    .checked-names{
        padding: 1rem;
    }
}
.container-show-button-if{
    border-top: 2px solid $color-red;
    width: 100%;
    .show-button{
        color: $color-red;
    }
    .button-show-if{
        background-color: $color-red;
        color: $color-white;
    }
}
.container-mousemove-change-background{
    display: flex;
    justify-content: center;
    align-items: center;
    color: $color-white;
    height: 200px;
    width: 100%
}
</style>
