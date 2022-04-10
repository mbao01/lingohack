<template>
  <div style="margin: 20px 0; display: flex; justify-content: center">
    <div style="display: flex; flex: 1; justify-content: center">
      <figure>
        <figcaption style="margin-bottom: 10px">
          <div
            style="
              display: flex;
              flex-wrap: nowrap;
              align-items: center;
              justify-content: center;
            "
          >
            <vs-tooltip style="pointer-events: unset">
              <i
                class="bx bx-info-circle"
                style="font-size: 20px; margin-right: 10px; cursor: pointer"
              ></i>
              <template #tooltip>
                <div class="content-tooltip">
                  <h4>{{ practise.event }}</h4>
                  <p>
                    {{ practise.description }}
                  </p>
                </div>
              </template>
            </vs-tooltip>
            {{ practise.subtitle }}
          </div>
          <div style="font-style: italic">
            {{ practise.authors }}
          </div>
        </figcaption>
        <div
          style="
            display: flex;
            justify-content: center;
            height: 378;
            width: 100%;
          "
          v-if="!practise.type && !practise.meta"
          ref="embed"
        />
        <div
          style="display: flex; justify-content: center; pointer-events: none"
          v-if="!(!practise.type && !practise.meta)"
        >
          <youtube
            v-if="practise.type === 'video' && practise.meta"
            :video-id="practise.meta.rid"
            ref="youtube"
            :height="378"
            :player-vars="youtube"
          />
          <audio-player
            class="audio-player"
            v-if="practise.type === 'audio'"
            ref="audio"
            src="https://cdn.trendybeatz.com/audio/Fireboy-Peru-Remix-Ft-21-Savage-And-Blxst-(TrendyBeatz.com).mp3"
          />
        </div>
      </figure>
    </div>
    <div style="display: flex; justify-content: center; width: 420px">
      <figure>
        <figcaption style="margin-bottom: 10px">
          Click the record button to start simultaneous translation. You have
          <strong
            >{{ recorder.attemptsLeft }}/{{
              recorderProps.attempts
            }}
            attempts</strong
          >
        </figcaption>
        <div
          style="
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            height: 440px;
          "
        >
          <audio-recorder
            format="mp3"
            upload-url="YOUR_API_URL"
            :attempts="recorderProps.attempts"
            :time="recorderProps.time"
            :before-recording="beforeRecording"
            :pause-recording="pauseRecording"
            :after-recording="afterRecording"
            :select-record="selectRecording"
            :before-upload="callback"
            :successful-upload="callback"
            :failed-upload="callback"
            ref="recorder"
          />
          <div class="textarea-control">
            <vs-button
              color="linkedin"
              size="large"
              :disabled="recorder.recordList.length === 0"
              @click="performAnalysis"
              style="font-size: 14px"
              :title="
                recorder.recordList.length > 0
                  ? 'Click to generate a report on your translation'
                  : 'Please record your translation first'
              "
            >
              Analyze
              <i
                style="margin-left: 10px; font-size: 18px"
                class="bx bxs-analyse"
              ></i>
            </vs-button>
            <vs-tooltip>
              <vs-button
                icon
                color="#109e92"
                :disabled="recorder.recordList.length === 0"
              >
                <i class="bx bxs-copy-alt"></i>
              </vs-button>
              <template #tooltip> Copy </template>
            </vs-tooltip>
            <vs-tooltip>
              <vs-button
                icon
                color="#109e92"
                :disabled="recorder.recordList.length === 0"
              >
                <i class="bx bxs-share-alt"></i>
              </vs-button>
              <template #tooltip> Share </template>
            </vs-tooltip>
          </div>
        </div>
      </figure>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Booth extends Vue {
  @Prop() practise!: any;
  $refs!: { audio: any; youtube: any; recorder: any; embed: any };
  recorder = { attemptsLeft: 0, recordList: [] };
  recorderProps = { time: 0, attempts: 2 };
  youtube = {
    autoplay: 0,
    controls: 0,
    disablekb: 1,
    enablejsapi: 1,
    fs: 0,
    loop: 0,
    modestbranding: 1,
    rel: 0,
  };
  record = null;

  async mounted() {
    if (!this.$refs.embed) {
      const time = await this.player.getMediaDuration();
      this.recorder = await this.$refs.recorder;
      this.recorderProps = {
        ...this.recorderProps,
        time: Number(parseFloat(String(time / 60)).toFixed(2)),
      };
    } else {
      const link = this.practise.link.split("talks/")[1];
      this.$refs.embed.innerHTML = `
      <div style="width:664px;position:relative;max-height:378px;padding-bottom:56.25%"><iframe src="https://embed.ted.com/talks/lang/en/${link}" width="854" height="480" style="position:absolute;left:0;top:0;width:100%;height:100%" frameborder="0" scrolling="no" allowfullscreen></iframe></div>
      `;
      console.log("Refs: ", this.$refs.embed.innerHTML);
    }
  }

  private decoratedControls = (type: string) => {
    const p =
      type === "audio" ? this.$refs.audio.player : this.$refs.youtube.player;
    switch (type) {
      case "audio":
        return {
          pauseRecording: p.pause.bind(p),
          beforeRecording: p.play.bind(p),
          afterRecording: p.load.bind(p),
          getMediaDuration: () => Promise.resolve(p.duration),
          ...p,
        };
      case "video":
        return {
          pauseRecording: p.pauseVideo,
          beforeRecording: p.playVideo,
          afterRecording: p.stopVideo,
          getMediaDuration: p.getDuration,
          ...p,
        };
    }
  };

  get player() {
    return this.decoratedControls(this.practise.type);
  }

  pauseRecording = async () => {
    await this.player.pauseRecording();
  };

  beforeRecording = async () => {
    await this.player.beforeRecording();
  };

  afterRecording = async () => {
    await this.player.afterRecording();
  };

  selectRecording = (record: any) => {
    this.record = record;
  };

  callback = (e: any) => {
    console.log("e: ", e);
  };

  performAnalysis = () => {
    console.log("Hi");
  };
}
</script>

<style lang="scss">
.textarea-control {
  box-sizing: content-box;
  max-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
}
.audio-player {
  margin-top: 50px;
  .ar-icon.ar-icon__lg.ar-player__play {
    // background: #747474;
    // border: 1px solid #747474;
    font-family: boxicons !important;
    font-weight: 400;
    font-style: normal;
    font-variant: normal;
    font-size: 30px;
    line-height: 1;
    text-rendering: auto;
    display: inline-block;
    text-transform: none;
    -webkit-font-smoothing: antialiased;
    svg {
      display: none !important;
    }
    &::before {
      content: "\ebc3";
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
  }
}
</style>
