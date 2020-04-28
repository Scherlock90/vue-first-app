<template>
  <div id="contact-container">
    <div class="contact">
      <div class="container-form first-puzzle">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
            <b-form-input id="input-2" v-model="form.name" required placeholder="Enter name"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Your body:" label-for="input-2">
            <b-form-input id="input-2" v-model="form.body" required placeholder="Enter body"></b-form-input>
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
        <div class="piece-right"></div>
      </div>
      <div class="geolocation second-puzzle">
        <GmapMap
          class="geo-map"
          :center="{lat:52.7632218, lng:23.5830237}"
          :zoom="14"
          map-type-id="terrain"
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
        <div class="piece-left"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import { BButton, BForm, BFormCheckboxGroup, BFormCheckbox, BFormInput, BFormGroup } from 'bootstrap-vue'

Vue.use(VueGoogleMaps, {
  load: {
    libraries: 'places'
  }
})

export default {
  components: {
    BButton,
    BForm,
    BFormCheckboxGroup,
    BFormCheckbox,
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

        const success = position => {
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
          navigator.geolocation.getCurrentPosition(success, error, {
            maximumAge: 60000,
            timeout: 5000,
            enableHighAccuracy: true
          })
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

#contact-container {
  min-height: 100vh;
  width: 100%;
  display: flex;

  .first-puzzle {
    position: relative;
    background-color: lightgray;
    width: 50%;

    @include sm-max {
      position: unset;
    }

    .piece-right {
      position: absolute;
      height: 10rem;
      width: 10rem;
      right: -8rem;
      bottom: 9rem;
      border-radius: 5rem;
      z-index: 100;
      background-color: lightgray;
    }
  }

  .second-puzzle {
    position: relative;
    width: 50%;
    background-color: #fff;

    @include sm-max {
      position: unset;
    }

    .piece-left {
      position: absolute;
      height: 10rem;
      width: 10rem;
      left: -8rem;
      top: 9rem;
      border-radius: 5rem;
      z-index: 100;
      background-color: #fff;
    }
  }

  .contact {
    height: 100%;
    width: 100%;
    display: flex;

    @include sm-max {
      display: grid;
      height: 100%;
    }

    .container-form {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 100%;

      form {
        @include sm-min {
          position: absolute;
          bottom: 5rem;
        }
        @include sm-max {
          z-index: 110;
        }
      }

      @include sm-max {
        padding: 25% 0 25% 0;
        width: 100%;
      }
    }

    .geolocation {
      z-index: 100;
      height: 50%;
      width: 50%;
      padding: 2%;
      display: grid;
      justify-content: center;
      align-items: center;
      position: relative;
      top: 5rem;

      .geo-map {
        height: 310px;
        width: 320px;

        @include sm-max {
          width: 310px;
          height: 320px;
        }

        @include md {
          width: 100%;
          min-width: 350px;
          min-height: 350px;
          height: 100%;
        }
      }

      @include sm-max {
        height: 100%;
        padding: 25% 0 25% 0;
        top: 0;
        width: 100%;
        justify-content: center;
      }

      .vue-map-container {
        z-index: 101;

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
}
</style>
