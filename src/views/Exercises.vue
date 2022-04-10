<template>
  <div>
    <NavBar />
    <vs-row vs-type="flex" style="margin: 20px 0">
      <vs-col w="12">
        <div
          style="
            display: flex;
            align-items: center;
            font-size: 40px;
            margin-top: 40px;
            margin-bottom: 40px;
          "
        >
          Coming Soon :) ☕👨‍💻<br /><br />

          Here, we provide short and useful exercises targeted at improving the
          translator's mastery of abbreviations, idioms, etc.
        </div>
      </vs-col>
      <vs-col w="12">
        <h3>See sample below</h3>
        <div style="display: flex; align-items: center">
          <audio-player
            class="audio-player"
            ref="audio"
            src="https://cdn.trendybeatz.com/audio/Fireboy-Peru-Remix-Ft-21-Savage-And-Blxst-(TrendyBeatz.com).mp3"
          />
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/NavBar.vue"; // @ is an alias to /src

@Component({
  components: {
    NavBar,
  },
})
export default class Exercises extends Vue {
  async beforeCreate() {
    const response = fetch(
      "https://e836-178-213-240-40.ngrok.io/api/get_questions",
      {
        method: "GET",
        body: JSON.stringify({
          number_of_questions: 1,
          mode: "speech",
          source_language: "english",
          category_id: "c5d1a7c8-1f21-4b3c-bc05-398092d67b9b",
        }),
      }
    ).then((a) => {
      console.log("A: ", a);
    });
  }

  mounted() {
    console.log("B");
  }
}
</script>

<style scoped lang="scss"></style>
