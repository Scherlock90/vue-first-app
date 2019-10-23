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
        <textarea v-model="showButtonIfIWriteSomething"></textarea>
        <div>
            <button class="button-show-if" type="sumbit" v-if="showButtonIfIWriteSomething">
                Let You see Me!
            </button>
        </div>
        <div>
            <input type="radio" id="yes" value="yes" v-model="toggleText"/>
            <label for="no">Yes!</label>
            <input type="radio" id="no" value="no" v-model="toggleText"/>
            <label for="no">No!</label>
        </div>
        <div v-if="toggleText">
            <p v-if="toggleText === 'yes'">
                Yeah, great!
            </p>
            <p v-else>
                No, isn't working!
            </p>
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
      toggleText: 'yes'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.test{
    display: grid;
    justify-content: center;
    align-items: center;
}
.padding-container{
    padding: 1rem;
}
.v-model-textarea{
    border-top:  2px  solid rgb(248, 4, 4);
}
.container-checked-names{
    border-top: 2px solid rgb(12, 12, 12);
    width: 100%;
}
.container-show-button-if{
    border-top: 2px solid rgb(247, 5, 5);
    width: 100%;
}
.checked-names{
    padding: 1rem;
}
.show-button{
    color: red;
}
.button-show-if{
    background-color: red;
    color: white;
}
</style>
