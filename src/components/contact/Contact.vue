<template>
  <div class="contact">
    <div class="container-form">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.name"
            required
            placeholder="Enter name"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Your body:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.body"
            required
            placeholder="Enter body"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4">
          <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
            <b-form-checkbox value="me">Check me out</b-form-checkbox>
            <b-form-checkbox value="that">Check that out</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </div>
    <div class="geolocation">
        <GmapMap
          :center="{lat:52.7632218, lng:23.5830237}"
          :zoom="14"
          map-type-id="terrain"
          style="width: 500px; height: 300px"
        >
          <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center=m.position"
          />
        </GmapMap>
      <b-button type="button" variant="primary" v-on:click="geolocation">Take your's location</b-button>
      <a id="map-link"></a>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import {
  BButton,
  BCard,
  BForm,
  BFormCheckboxGroup,
  BFormCheckbox,
  BFormSelect,
  BFormInput,
  BFormGroup
} from 'bootstrap-vue'

Vue.use(VueGoogleMaps, {
  load: {
    libraries: 'places'
  }
})

export default {
  components: {
    BButton,
    BCard,
    BForm,
    BFormCheckboxGroup,
    BFormCheckbox,
    BFormSelect,
    BFormInput,
    BFormGroup
  },

  data: () => ({
    form: {
      email: '',
      name: '',
      body: '',
      checked: []
    },
    geolection: 0,
    latitude: 0,
    longitude: 0,
    status: '',
    show: true
  }),

  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },

    geolocation () {
      if (navigator.geolocation) {
        const mapLink = document.querySelector('#map-link')

        const success = (position) => {
          const lat = position.coords.latitude
          const lang = position.coords.longitude

          // mapLink.href = `https://www.openstreetmap.org/#map=18/${lat}/${lang}`
          mapLink.textContent = `Latitude: ${lat} °, Longitude: ${lang} °`
        }

        const error = () => {
          console.log('Unable to retrieve your location')
        }

        if (!navigator.geolocation) {
          console.log('Geolocation is not supported by your browser')
        } else {
          console.log('Locating…')
          navigator.geolocation.getCurrentPosition(success, error, { maximumAge: 60000, timeout: 5000, enableHighAccuracy: true })
        }
      }
    },

    onReset (evt) {
      evt.preventDefault()
      this.form.email = ''
      this.form.name = ''
      this.form.body = ''
      this.form.checked = []
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/app';

.contact {
  height: 90%;
  padding-top: 10%;
  display: flex;

  @include sm-max {
    display: grid;
  }

  .container-form {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;

    @include sm-max {
      width: 100%;
    }
  }

  .geolocation {
    width: 50%;
    padding: 2%;
    display: grid;
    justify-content: left;
    align-items: center;

    @include sm-max {
      width: 100%;
      justify-content: center;
    }

    .vue-map-container{
      @include sm-max {
        width: 100% !important;
        min-width: 310px;
      }
    }
  }
}

.router-link-custom {
  &:hover {
    color: #ffffff;
  }
}
</style>
