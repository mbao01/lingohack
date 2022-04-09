<template>
  <div>
    <div class="exercise">
      <div>
        <h2 style="margin: 0 0 10px 0">{{ exercise.title }}</h2>
        <div style="display: flex; justify-content: center">
          <span v-for="tag in [...exercise.tags]" v-bind:key="tag">
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
        <p style="padding-bottom: 20px">{{ exercise.subtitle }}</p>
      </div>
      <div v-if="exercise.mode === 'simultaneous'">
        <Booth :exercise="exercise" />
      </div>
      <div v-if="exercise.mode === 'written'">
        <vs-row
          vs-type="flex"
          style="margin: 20px 0; display: flex; justify-content: center"
        >
          <vs-col
            vs-type="flex"
            vs-justify="center"
            vs-align="center"
            w="12"
            style="display: flex; height: 100%"
          >
            <vs-row
              vs-type="flex"
              style="width: calc(100% + 40px); margin: 0 -20px"
              ><vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                w="6"
                style="display: flex"
              >
                <div class="textdisplay">
                  <pre>
Dear Jason,

I’m writing to resign from my position as customer service representative, effective August 14, 2020.

I’ve recently decided to go back to school, and my program starts in early September. I’m tendering my resignation now so that I can be as helpful as possible to you during the transition.

I’ve truly enjoyed my time working with you and everyone else on our team at LMK. It’s rare to find a customer service role that offers as much opportunity to grow and learn, as well as such a positive, inspiring team of people to grow and learn with.

I’m particularly grateful for your guidance while I was considering furthering my education. Your support has meant so much to me. 

Please let me know if there’s anything I can do to help you find and train my replacement.

Thanks, and best wishes,

Nicole Thomas (signature hard copy letter)

Nicole Thomas
              </pre
                  >
                </div>
              </vs-col>
              <vs-col
                vs-type="flex"
                vs-justify="center"
                vs-align="center"
                w="6"
                style="display: flex; height: 100%"
                ><div class="textarea">
                  <textarea></textarea>
                  <div class="textarea-control">
                    <vs-button
                      color="linkedin"
                      size="large"
                      :active="active == 3"
                      @click="active = 3"
                      style="font-size: 14px"
                      title="Click to generate a report on your translation"
                    >
                      Analyze
                      <i
                        style="margin-left: 10px; font-size: 18px"
                        class="bx bxs-analyse"
                      ></i>
                    </vs-button>
                    <vs-tooltip>
                      <vs-button icon color="#109e92">
                        <i class="bx bxs-copy-alt"></i>
                      </vs-button>
                      <template #tooltip> Copy </template>
                    </vs-tooltip>
                    <vs-tooltip>
                      <vs-button icon color="#109e92">
                        <i class="bx bxs-share-alt"></i>
                      </vs-button>
                      <template #tooltip> Share </template>
                    </vs-tooltip>
                  </div>
                </div></vs-col
              ></vs-row
            >
          </vs-col>
        </vs-row>
      </div>

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
                Please click the Analyse to get a summary)
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
import NavBar from "@/components/NavBar.vue"; // @ is an alias to /src
import Booth from "@/views/Booth.vue"; // @ is an alias to /src

@Component({
  components: {
    NavBar,
    Booth,
  },
})
export default class Exercise extends Vue {
  active = 0;
  value3 = ["1"];
  value = "1";
  exerciseId = this.$route.params.id;
  exercise = this.$store.state.exercises[this.exerciseId];

  handleFileUpload = (e: Event) => {
    console.log("E: ", e);
  };
}
</script>

<style lang="scss">
.exercise {
  margin: 0 auto 40px auto;
}

.textdisplay {
  text-align: left;
  padding: 10px 20px;
  width: 100%;
  background: rgba(var(--vs-background), 1);
  min-height: 200px;
  border-radius: 20px;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, var(--vs-shadow-opacity));

  pre {
    white-space: pre-wrap;
  }
}

.textarea {
  width: 100%;
  background: rgba(var(--vs-background), 1);
  min-height: 200px;
  background: transparent;

  textarea {
    width: calc(100% - 40px);
    height: calc(100% - 60px);
    margin: auto;
    resize: none;
  }

  .textarea-control {
    box-sizing: content-box;
    max-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
  }
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
