import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    exercises: {
      "1": {
        id: "1",
        title: "Exercise 1",
        subtitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit...",
        isCompleted: false,
        mode: "written", // 'simultaneous'
        content: "some-content", // text or audio url
        result: "", // text or audio url
        tags: ["Written", "Politics"],
      },
      "2": {
        id: "2",
        title: "Exercise 2",
        subtitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit...",
        isCompleted: false,
        mode: "simultaneous", // 'simultaneous'
        content: "some-content", // text or audio url
        result: "", // text or audio url
        tags: ["Simultaneous", "Religion"],
      },
      "3": {
        id: "3",
        title: "Exercise 3",
        subtitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit...",
        isCompleted: false,
        mode: "simultaneous", // 'simultaneous'
        content: "some-content", // text or audio url
        result: "", // text or audio url
        tags: ["tag1", "tag2"],
      },
      "4": {
        id: "4",
        title: "Exercise 4",
        subtitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit...",
        isCompleted: true,
        mode: "written", // 'simultaneous'
        content: "some-content", // text or audio url
        result: "", // text or audio url
        tags: ["tag1", "tag2"],
      },
      "5": {
        id: "5",
        title: "Exercise 5",
        subtitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit...",
        isCompleted: false,
        mode: "written", // 'simultaneous'
        content: "some-content", // text or audio url
        result: "", // text or audio url
        tags: ["tag1", "tag2"],
      },
      "6": {
        id: "6",
        title: "Exercise 6",
        subtitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit...",
        isCompleted: false,
        mode: "simultaneous", // 'simultaneous'
        content: "some-content", // text or audio url
        result: "", // text or audio url
        tags: ["tag1", "tag2"],
      },
      "7": {
        id: "7",
        title: "Exercise 7",
        subtitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit...",
        isCompleted: false,
        mode: "written", // 'simultaneous'
        content: "some-content", // text or audio url
        result: "", // text or audio url
        tags: ["tag1", "tag2"],
      },
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
