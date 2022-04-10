<template>
  <div class="nav-bar">
    <div class="section">
      <router-link
        to="/"
        style="text-decoration: none; color: inherit"
        v-if="!['/', '/exercises', '/practise'].includes($route.path)"
        ><vs-button color="twitch"
          ><i class="bx bxs-left-arrow-circle" style="margin-right: 5px"></i> Go
          Back</vs-button
        ></router-link
      >
      <router-link
        to="/"
        style="text-decoration: none; color: inherit"
        v-if="['/', '/exercises', '/practise'].includes($route.path)"
        ><vs-button
          color="tumblr"
          :active="$route.path === '/' || $route.path === '/practise'"
        >
          Practise
        </vs-button></router-link
      >
      <router-link
        to="/exercises"
        style="text-decoration: none; color: inherit"
        v-if="['/', '/exercises', '/practise'].includes($route.path)"
        :active="$route.path === '/exercises'"
        ><vs-button color="tumblr"> Exercises </vs-button></router-link
      >
      &nbsp;
    </div>
    <div class="language">
      <vs-button :active="false" @click="active = 0" color="#109e92"
        >Eng <i class="bx bxs-right-arrow-circle"></i> Rus</vs-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class NavBar extends Vue {
  active = 0;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav-bar {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  margin: auto;
}
.section {
  display: flex;
}
.language {
  display: flex;
  position: relative;
  i {
    margin: 0 6px;
    font-size: 16px;
  }
}
</style>
