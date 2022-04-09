<template>
  <div class="nav-bar">
    <div class="section">
      <vs-button :flat="active != 0" :active="active == 0" @click="active = 0"
        >Exercises</vs-button
      >
      <vs-button :flat="active != 1" :active="active == 1" @click="active = 1"
        >Booth</vs-button
      >
    </div>

    <div class="language">
      <vs-button :active="false" @click="active = 0"
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
