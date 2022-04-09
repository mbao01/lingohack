<template>
  <div>
    <NavBar />
    <div class="exercise">
      <vs-row vs-type="flex" style="margin: 20px 0">
        <vs-col
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
          w="6"
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
            label="Categories"
            filter
            multiple
            collapse-chips
            v-model="value3"
          >
            <vs-option-group>
              <div slot="title">Topics</div>
              <vs-option label="Politics" value="2"> Politics </vs-option>
              <vs-option label="Sports" value="3"> Sports </vs-option>
              <vs-option label="Medicine" value="4"> Medicine </vs-option>
              <vs-option label="Lifestyle" value="5"> Lifestyle </vs-option>
              <vs-option label="Religion" value="6"> Religion </vs-option>
              <vs-option label="Others" value="7"> Others </vs-option>
            </vs-option-group>
            <vs-option-group>
              <div slot="title">XXXXXX</div>
              <vs-option label="Verbs" value="8"> Verbs </vs-option>
              <vs-option label="Idioms" value="9"> Idioms </vs-option>
              <vs-option label="Acronyms" value="10"> Acronyms </vs-option>
            </vs-option-group>
          </vs-select>
        </vs-col>
      </vs-row>

      <vs-row style="width: calc(100% + 40px); margin: 0 -20px">
        <vs-col
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
          w="4"
          v-for="exercise in exercises"
          :key="exercise.id"
        >
          <router-link
            :to="'/exercise/' + exercise.id"
            style="text-decoration: none; color: inherit"
          >
            <vs-card type="3" style="margin: 20px; text-align: left">
              <template #title>
                <h3 style="font-size: 14px; margin-top: 10px">
                  {{ exercise.title }}
                </h3>
                <h5
                  style="
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    font-size: 12px;
                  "
                >
                  E{{ exercise.id }}
                </h5>

                <vs-button
                  style="
                    position: absolute;
                    top: 3px;
                    font-weight: bold;
                    left: 20px;
                    height: 18px;
                    font-size: 10px;
                    margin-left: 10px;
                  "
                  flat
                  :color="
                    exercise.mode === 'simultaneous' ? '#109e92' : '#2c3e50'
                  "
                  size="small"
                >
                  {{ exercise.mode }}
                </vs-button>

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
                    :border="!exercise.isCompleted"
                    :flat="!exercise.isCompleted"
                    :color="exercise.isCompleted ? 'whatsapp' : null"
                    style="width: 12px; height: 12px; margin: 0"
                  >
                  </vs-button>
                </h5>
              </template>
              <template #text>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit...
                </p>
              </template>
              <template #interactions>
                <vs-button danger icon>
                  <i class="bx bx-heart"></i>
                </vs-button>
                <vs-button class="btn-chat" shadow primary>
                  <i class="bx bx-chat"></i>
                  <span class="span"> 54 </span>
                </vs-button>
              </template>
            </vs-card>
          </router-link>
        </vs-col>
      </vs-row>
    </div>
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
export default class Home extends Vue {
  active = 0;
  value3 = ["1"];
  value = "1";
  exercises: any[] = Object.values(this.$store.state.exercises) || [];
}
</script>

<style scoped lang="scss">
.exercise {
  margin: 40px auto;
}
</style>
