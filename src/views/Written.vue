<template>
  <div style="margin: 20px 0; display: flex; justify-content: center">
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
          style="width: calc(100% + 40px); margin: 0 -20px 60px"
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
              </pre>
            </div>
          </vs-col>
          <vs-col
            vs-type="flex"
            vs-justify="center"
            vs-align="center"
            w="6"
            style="display: flex; min-height: 100%"
            ><div class="textarea">
              <textarea></textarea>
              <div class="textarea-control">
                <vs-button
                  color="linkedin"
                  size="large"
                  :active="false"
                  @click="performAnalysis"
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
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Written extends Vue {
  @Prop() task!: any;

  performAnalysis = () => {
    console.log("Hi");
  };
}
</script>

<style lang="scss">
.textdisplay {
  text-align: left;
  padding: 10px 20px;
  width: 100%;
  background: rgba(var(--vs-background), 1);
  min-height: 200px;
  border-radius: 20px;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, var(--vs-shadow-opacity));
  height: 100%;

  pre {
    white-space: pre-wrap;
  }
}

.textarea {
  width: 100%;
  background: rgba(var(--vs-background), 1);
  min-height: 200px;
  background: transparent;
  min-height: 100%;

  textarea {
    width: calc(100% - 40px);
    height: 100%;
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
</style>
