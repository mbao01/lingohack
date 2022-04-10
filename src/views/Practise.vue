<template>
  <div>
    <vs-row vs-type="flex" style="margin: 20px 0">
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        w="12"
        style="display: flex"
      >
        <vs-select
          label="Mode"
          v-model="value"
          style="width: 140px; margin-right: 20px"
        >
          <vs-option label="Simultaneous" value="1"> Simultaneous </vs-option>
          <vs-option label="Written" value="2"> Written </vs-option>
        </vs-select>
        <vs-select
          label="Topics"
          filter
          multiple
          collapse-chips
          v-model="categories"
          style="margin-right: 20px"
        >
          <vs-option label="Politics" value="2"> Politics </vs-option>
          <vs-option label="Sports" value="3"> Sports </vs-option>
          <vs-option label="Medicine" value="4"> Medicine </vs-option>
          <vs-option label="Lifestyle" value="5"> Lifestyle </vs-option>
          <vs-option label="Religion" value="6"> Religion </vs-option>
          <vs-option label="Others" value="7"> Others </vs-option>
        </vs-select>
        <vs-select
          label="Accent"
          filter
          multiple
          collapse-chips
          v-model="categories"
          style="margin-right: 20px"
        >
          <div slot="title">Accent</div>
          <vs-option label="Russian" value="11"> Russian </vs-option>
          <vs-option label="British" value="12"> British </vs-option>
          <vs-option label="American" value="13"> American </vs-option>
          <vs-option label="Hawaiian" value="14"> Hawaiian </vs-option>
        </vs-select>
      </vs-col>
    </vs-row>

    <vs-row style="width: calc(100% + 40px); margin: 0 -20px">
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        w="4"
        v-for="practise in data"
        :key="practise.title"
      >
        <router-link
          :to="'/exercises/' + practise.id"
          style="text-decoration: none; color: inherit"
        >
          <vs-card type="3" style="margin: 20px; text-align: left">
            <template #title>
              <h3 style="font-size: 14px; margin-top: 10px">
                {{ practise.event }}
              </h3>
              <div
                style="
                  position: absolute;
                  top: 3px;
                  left: 10px;
                  font-size: 12px;
                  display: flex;
                  align-items: center;
                  flex-wrap: nowrap;
                "
              >
                <h5 style="font-size: 12px; margin-right: 2px">
                  P{{ practise.id }}
                </h5>

                <vs-button
                  style="font-weight: bold; height: 18px; font-size: 10px"
                  flat
                  :color="
                    practise.mode === 'simultaneous' ? '#109e92' : '#2c3e50'
                  "
                  size="small"
                >
                  {{ practise.mode }}
                </vs-button>
              </div>

              <h5
                style="
                  position: absolute;
                  top: 12px;
                  right: 10px;
                  font-size: 12px;
                "
              >
                <vs-button
                  circle
                  :border="!practise.isCompleted"
                  :flat="!practise.isCompleted"
                  :color="practise.isCompleted ? 'whatsapp' : null"
                  style="width: 12px; height: 12px; margin: 0"
                >
                </vs-button>
              </h5>
            </template>
            <template #text>
              <p class="subtitle">
                {{ practise.subtitle }}
              </p>
            </template>
          </vs-card>
        </router-link>
      </vs-col>
    </vs-row>

    <vs-row style="margin-top: 20px">
      <vs-col w="12">
        <vs-pagination v-model="page" :length="totalPages" />
      </vs-col>
    </vs-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/NavBar.vue"; // @ is an alias to /src
import json from "@/assets/data/crawled.json";

@Component({
  components: {
    NavBar,
  },
})
export default class Practise extends Vue {
  active = 0;
  categories = ["5", "3", "12"];
  value = "1";
  practises: any[] = Object.values(this.$store.state.practises) || [];
  page_ = 1;
  pageSize = 12;
  startIndex = 0;
  data: any[] = json.slice(0, this.pageSize);
  totalPages = Math.round(json.length / this.pageSize);

  set page(p: number) {
    this.startIndex = (p - 1) * this.pageSize;
    this.data = json.slice(this.startIndex, this.startIndex + this.pageSize);
    this.page_ = p;
  }

  get page(): number {
    return this.page_ || 1;
  }
}
</script>

<style scoped lang="scss">
.subtitle {
  height: 40px;
  max-height: 40px !important;
  overflow: hidden;
}
</style>
