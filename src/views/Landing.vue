<template>
  <div class="landing">
    <NavBar />
    <Practise />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/NavBar.vue"; // @ is an alias to /src
import Practise from "@/views/Practise.vue"; // @ is an alias to /src
import Exercises from "@/views/Exercises.vue"; // @ is an alias to /src

@Component({
  components: {
    NavBar,
    Practise,
    Exercises,
  },
})
export default class Landing extends Vue {}
</script>

<style scoped lang="scss">
.landing {
  max-width: 1000px;
  margin: auto;
}
</style>
