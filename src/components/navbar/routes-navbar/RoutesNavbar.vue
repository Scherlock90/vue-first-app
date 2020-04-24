<template>
    <li class="current-menu-item" v-on:click="toggleMenu">
        <router-link :to="pathTo">{{ pathName }}</router-link>
    </li>
</template>

<script>
export default {
  props: {
    pathName: { type: String, required: true },
    pathTo: { type: String, required: true },
    toggleMenu: { type: Function, required: true }
  }
}
</script>

<style lang="scss"></style>
