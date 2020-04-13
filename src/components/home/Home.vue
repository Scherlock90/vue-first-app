<template>
  <div id="home-container">
    <h1>{{ msg }}</h1>
    <div>
      {{ newWord }}
    </div>
    <div>
      <a id="map-link"></a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Vue.js App!',
      newWord: 'Your location',
      geolection: 0,
      latitude: 0,
      longitude: 0,
      status: ''
    }
  },
  methods: {
    geolocation () {
      if (navigator.geolocation) {
        (function () {
          const mapLink = document.querySelector('#map-link')

          function success (position) {
            const lat = position.coords.latitude
            const lang = position.coords.longitude

            mapLink.href = `https://www.openstreetmap.org/#map=18/${lat}/${lang}`
            mapLink.textContent = `Latitude: ${lat} °, Longitude: ${lang} °`
          }

          function error () {
            console.log('Unable to retrieve your location')
          }

          if (!navigator.geolocation) {
            console.log('Geolocation is not supported by your browser')
          } else {
            console.log('Locating…')
            navigator.geolocation.getCurrentPosition(success, error)
          }
        })()
      }
    }
  },
  mounted () {
    this.geolocation()
  }
}
</script>

<style scoped>
#home-container{
  height: 100%;
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
