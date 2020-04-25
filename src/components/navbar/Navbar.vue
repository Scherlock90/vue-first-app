<template>
  <div>
    <header :class="switchSiteHeaderClass">
      <div class="site-branding">
        <h1 :class="switchClassHamburger">
          <router-link to="/">
            <img class="logo-type" :src="require('../../assets/images/logo-sen.png')" alt="Logo" />
          </router-link>
        </h1>
      </div>
      <div class="hamburger-menu">
        <div class="menu-icon">
          <img
            :src="require(`../../assets/images/${hamburgerImage}.png`)"
            alt="menu icon"
            v-on:click="toggleMenu"
          />
        </div>
      </div>
    </header>
    <nav :id="switchId" class="flex flex-column justify-content-between">
      <div class="site-branding d-none d-lg-block">
        <h1 class="site-title">
          <router-link to="/">SeN</router-link>
        </h1>
      </div>
      <ul class="main-menu flex flex-column justify-content-center">
        <routes-navbar
          v-for="item in navbarItem"
          :key="item.pathName"
          :pathName="item.pathName"
          :pathTo="item.pathTo"
          :toggleMenu="toggleMenu"
        />
      </ul>
    </nav>
  </div>
</template>

<script>
import { BNav, BNavItem } from 'bootstrap-vue'
import RoutesNavbar from './routes-navbar/RoutesNavbar'

export default {
  components: {
    'b-nav-item': BNavItem,
    'b-nav': BNav,
    'routes-navbar': RoutesNavbar
  },

  data: () => ({
    show: false,
    navbarItem: [
      { pathName: 'Home', pathTo: '/' },
      { pathName: 'About Me', pathTo: '/about-me' },
      { pathName: 'Contact', pathTo: '/contact' },
      { pathName: 'Blog', pathTo: '/blog' }
    ]
  }),

  computed: {
    switchId () {
      return this.show === true ? 'site-navigation__show' : 'site-navigation'
    },
    switchClassHamburger () {
      return this.show === true ? 'site-title home-title__hide' : 'site-title home-title'
    },
    switchSiteHeaderClass () {
      return this.show === true ? 'site-header site-header__close-menu' : 'site-header'
    },
    hamburgerImage () {
      return this.show === true ? 'x' : 'menu-icon'
    }
  },

  methods: {
    toggleMenu () {
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/styles/app";

@media screen and (min-width: 992px) {
    .outer-container {
        padding-left: 80px;
    }
}

@media screen and (min-width: 768px) {
    .no-padding {
        padding: 0;
    }
}

.logo-type{
  border-radius: 100%;
}

.site-branding {
    transition: all .5s;
}

.site-title {
    margin: 0;
    text-align: center;
}

#site-navigation {
    .site-title {
        a {
            display: block;
        }
    }
}

.hamburger-menu  {
    .menu-icon, .menu-close-icon {
        width: 44px;
        height: 44px;
        text-align: center;
        cursor: pointer;
        transition: all 0.5s;
    }

    img {
        display: block;
        margin: 0 auto;
    }
}

#site-navigation {
    transition: all 0.5s;
}

.main-menu {
    padding: 15px 30px;
    margin: 0;

    li {
        display: block;
        padding: 12px 0;
        font-size: 30px;
        font-weight: 500;
        border-bottom: 1px solid #ebebeb;

        &:nth-last-of-type(1) {
            border-bottom: 0;
        }

        a {
            display: block;
            color: #a6a6a6;
            text-decoration: none;
            transition: all 0.35s;

            &:hover {
                color: #f0437e;
            }
        }

        .current-menu-item {
            a {
                color: #f0437e;
            }
        }
    }
}

.nav-bar-sep {
    height: 78px;
}

@media screen and (min-width: 992px) {
    .site-header {
        z-index: 2001;
        position: fixed;
        top: 0;
        left: 0;
        width: 80px;
        height: 100vh;
        padding: 0 15px;
        box-shadow: 6px 0 12px rgba(0,0,0,.05);
        background: #fff;

        .site-branding {
            &.hide {
                visibility: hidden;
                opacity: 0;
            }
        }
    }

    .home-title{
      transition: opacity linear 0.5s;
      opacity: 1;

      &__hide {
        transition: opacity linear 0.5s;
        opacity: 0;
      }
    }

    #site-navigation {
        position: fixed;
        top: 0;
        transition: all linear 0.5s;
        transform: translateX(-250px);
        width: 250px;
        height: 100vh;
        padding: 0;
        box-shadow: 16px 0 42px rgba(0,0,0,.09);

        background: #fff;

        &__show {
            transition: all linear 0.5s;
            transform: translateX(70px);
            position: fixed;
            width: 254px;
            height: 100vh;
            z-index: 2000;
            background-color: #fff;
        }
    }

    .site-title {
        padding: 28px 0 10px 0;

        a {
          text-decoration: none;
        }
    }

    .hamburger-menu {

        .menu-icon {
            position: absolute;
            top: calc(50vh - 22px);
            left: 15px;
            width: calc(100% - 30px);
            padding: 10px 0;
        }
    }

    .main-menu {
        height: calc(100vh - 160px);
        padding: 0;

        li {
            border-bottom: 0;
            text-align: center;
        }
    }

    .social-profiles ul li {
        font-size: 1.125rem;
    }
}

@media screen and (max-width: 991px) {
  .site-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    padding: 15px 30px;
    background: #fff;
    box-shadow: 0 12px 24px rgba(0,0,0,.09);
  }

  .main-menu {
    padding: 106px 30px;

    li {
      position: relative;

      a {
        display: flex;
      }

      &::after {
        content: '⮚';
        position: absolute;
        top: 11px;
        right: 0;
      }

      &.current-menu-item {
        a {
          color: #a6a6a6;
        }

        &::after {
          color: #a6a6a6;
        }
      }
    }
  }

  .site-header, .hamburger-menu {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    .menu-icon {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  #site-navigation {
    position: absolute;
    top: 78px;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 500px;
    background: #fff;
    box-shadow: 0 12px 24px rgba(0,0,0,.09);
    visibility: hidden;
    opacity: 0;
    transition: all 0.35s;
  }

  #site-navigation__show {
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 300;
    background-color: #fff;
  }
}

@media screen and (max-width: 756px) {
  .site-branding {
    display: none;
  }

  .site-header {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 20%;
    top: 2%;
    left: 75%;
    border-radius: 100%;
    z-index: 999;
    padding: 15px 30px;
    background: transparent;
    box-shadow: 0 12px 24px rgba(0,0,0,.09);

    &__close-menu {
      background: #fff;
      box-shadow: none;
    }
  }

  .main-menu {
    padding: 106px 30px;

    li {
      position: relative;

      a {
        display: flex;
      }

      &::after {
        content: '⮚';
        position: absolute;
        top: 11px;
        right: 0;
      }

      &.current-menu-item {
        a {
          color: #a6a6a6;
        }

        &::after {
          color: #a6a6a6;
        }
      }
    }
  }

  .hamburger-menu {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    .menu-icon {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  #site-navigation {
    position: absolute;
    top: 78px;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 500px;
    background: #fff;
    box-shadow: 0 12px 24px rgba(0,0,0,.09);
    visibility: hidden;
    opacity: 0;
    transition: all 0.35s;
  }

  #site-navigation__show {
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 300;
    background-color: #fff;
  }
}

.navbar {
  padding: 0;
}
</style>
