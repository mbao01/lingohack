<template>
  <div>
    <NavBar />
    <div class="practise">
      <div>
        <h2 style="margin: 0 0 10px 0">{{ practise.event }}</h2>
        <p style="margin: 0 0 10px 0">{{ practise.title }}</p>
        <div
          style="display: flex; justify-content: center; padding-bottom: 20px"
        >
          <span v-for="tag in [...practise.tags]" v-bind:key="tag">
            <vs-button
              style="font-weight: bold; height: 18px; font-size: 10px"
              flat
              :color="
                tag.toLowerCase() === 'simultaneous'
                  ? '#109e92'
                  : tag.toLowerCase() === 'written'
                  ? '#2c3e50'
                  : 'linkedin'
              "
              size="small"
            >
              {{ tag }}
            </vs-button>
          </span>
        </div>
      </div>

      <Booth :practise="practise" v-if="practise.mode === 'simultaneous'" />
      <Written :practise="practise" v-if="practise.mode === 'written'" />

      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
          <vs-card
            class="max-card summary"
            type="3"
            style="width: 100%; text-align: left"
          >
            <template #title style="font-size: 14px; margin-top: 10px">
              <h3 style="font-size: 18px; margin-top: 10px; text-align: center">
                Summary
              </h3>
            </template>
            <template #text>
              <p style="text-align: center; margin: 20px 0">
                Please click the Analyse button to get a summary)
              </p>
            </template>
          </vs-card>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import json from "@/assets/data/crawled.json";
import NavBar from "@/components/NavBar.vue"; // @ is an alias to /src
import Booth from "@/views/Booth.vue";
import Written from "@/views/Written.vue"; // @ is an alias to /src

@Component({
  components: {
    NavBar,
    Booth,
    Written,
  },
})
export default class Task extends Vue {
  active = 0;
  value3 = ["1"];
  value = "1";
  practiseId = Number(this.$route.params.id);
  practise = json[this.practiseId - 1];

  handleFileUpload = (e: Event) => {
    console.log("E: ", e);
  };
}
</script>

<style lang="scss">
.practise {
  margin: 0 auto 40px auto;
}

.max-card {
  .vs-card {
    max-width: 100% !important;
  }
}

.summary {
  & > * {
    width: 100%;
  }

  .vs-card__text {
    width: 100%;
  }

  .vs-card__title {
    text-align: center;
    font-size: 20px;
  }
}
</style>
