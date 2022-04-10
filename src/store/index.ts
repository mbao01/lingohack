import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    practises: {
      "1": {
        id: "1",
        type: "text",
        title: "Task 1",
        subtitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit...",
        isCompleted: false,
        mode: "written", // 'simultaneous'
        content: "some-content", // text or audio url
        result: "", // text or audio url
        tags: ["Written", "Politics"],
        meta: {},
      },
      "2": {
        id: "2",
        type: "video",
        title: "Task 2",
        subtitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit...",
        isCompleted: false,
        mode: "simultaneous", // 'simultaneous'
        content: "some-content", // text or audio url
        result: "", // text or audio url
        tags: ["Booth", "Religion", "TED", "Indian", "English"],
        meta: {
          title: "The Simple Secret To Better Decisions",
          accent: "Indian",
          language: "English",
          link: "https://youtu.be/utPYpV0k2Zc",
          rid: "utPYpV0k2Zc",
        },
      },
      "3": {
        id: "3",
        type: "audio",
        title: "Task 3",
        subtitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit...",
        isCompleted: false,
        mode: "simultaneous", // 'simultaneous'
        content: "some-content", // text or audio url
        result: "", // text or audio url
        tags: ["tag1", "tag2"],
        meta: {},
      },
      "4": {
        id: "4",
        type: "text",
        title: "Task 4",
        subtitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit...",

        isCompleted: true,
        mode: "written", // 'simultaneous'
        content: "some-content", // text or audio url
        result: "", // text or audio url
        tags: ["tag1", "tag2"],
        meta: {},
      },
      "5": {
        id: "5",
        type: "text",
        title: "Task 5",
        subtitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit...",

        isCompleted: false,
        mode: "written", // 'simultaneous'
        content: "some-content", // text or audio url
        result: "", // text or audio url
        tags: ["tag1", "tag2"],
        meta: {},
      },
      "6": {
        id: "6",
        type: "video",
        title: "Task 6",
        subtitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit...",

        isCompleted: false,
        mode: "simultaneous", // 'simultaneous'
        content: "some-content", // text or audio url
        result: "", // text or audio url
        tags: ["Booth", "TED", "Women", "Career", "British", "English"],
        meta: {
          title:
            "How To Establish Community at Work to Promote Women's Success",
          accent: "British",
          language: "English",
          link: "https://youtu.be/JXym8mYSgVs",
          rid: "JXym8mYSgVs",
        },
      },
      "7": {
        id: "7",
        type: "text",
        title: "Task 7",
        subtitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit...",

        isCompleted: false,
        mode: "written", // 'simultaneous'
        content: "some-content", // text or audio url
        result: "", // text or audio url
        tags: ["tag1", "tag2"],
        meta: {},
      },
    },
    booth: [
      {
        title: "The Simple Secret To Better Decisions",
        accent: "Indian",
        language: "English",
        link: "https://youtu.be/utPYpV0k2Zc?list=PLsRNoUx8w3rMd9VBBa7yEjXYlnuHrDsDf",
      },
      {
        title: "Pranks For The Memories",
        accent: "US",
        language: "English",
        link: "https://www.youtube.com/watch?v=IJfcoMRjJmU&list=PLsRNoUx8w3rMd9VBBa7yEjXYlnuHrDsDf&index=2",
      },
      {
        title: "Imposter Syndrome By Any Other Name, Is Bravery",
        accent: "US",
        language: "English",
        link: "https://www.youtube.com/watch?v=SeLmwYdegLA&list=PLsRNoUx8w3rMd9VBBa7yEjXYlnuHrDsDf&index=5",
      },
      {
        title: "The Power and Pitfalls of the Mind",
        accent: "British",
        language: "English",
        link: "https://www.youtube.com/watch?v=mPdyVYgwq_U&list=PLsRNoUx8w3rM0I_7PNOCbOa4vE1WY75Ss&index=3",
      },
      {
        title: "How To Establish Community at Work to Promote Women's Success",
        accent: "British",
        language: "English",
        link: "https://youtu.be/JXym8mYSgVs?list=PLsRNoUx8w3rM0I_7PNOCbOa4vE1WY75Ss",
      },
      {
        title: "Evolution of cross-cultural identities",
        accent: "Arab",
        language: "English",
        link: "https://youtu.be/uo9r8cLQ8Aw?list=PLsRNoUx8w3rMhgM45eL-NWBCAVuDEzGGo",
      },
      {
        title: "Re-engineering schools",
        accent: "Arab",
        language: "English",
        link: "https://www.youtube.com/watch?v=wWGH7-XjYng&list=PLsRNoUx8w3rMhgM45eL-NWBCAVuDEzGGo&index=7",
      },
      {
        title: "Travel to the Frontier of Science",
        accent: "Ukrainan",
        language: "English",
        link: "https://youtu.be/Y5DEfbJHtQw?list=PLsRNoUx8w3rME5lHHVXRxkNv-zlEH6yRv",
      },
      {
        title: "An ant odyssey",
        accent: "US",
        language: "English",
        link: "https://youtu.be/XKhMD2Pc2FM?list=PLsRNoUx8w3rME5lHHVXRxkNv-zlEH6yRv",
      },
      {
        title: "Public Art: a sustainable key to requalification",
        accent: "Italian",
        language: "English",
        link: "https://youtu.be/G2reBb2CQQM?list=PLsRNoUx8w3rNGwfJyRlUVJ0BPCMnL8oYo",
      },
      {
        title: "Recharge: What we have learned about Wellbeing",
        accent: "British",
        language: "English",
        link: "https://youtu.be/s5q5Y5NfdtE?list=PLsRNoUx8w3rNGwfJyRlUVJ0BPCMnL8oYo",
      },
      {
        title: "Generosity in Business",
        accent: "Italian",
        language: "English",
        link: "https://youtu.be/lwiFH_wqlIs?list=PLsRNoUx8w3rNGwfJyRlUVJ0BPCMnL8oYo",
      },
      {
        title: "Recharge is consciousness",
        accent: "Italian",
        language: "English",
        link: "https://youtu.be/A08dkl0MhBs?list=PLsRNoUx8w3rNGwfJyRlUVJ0BPCMnL8oYo",
      },
      {
        title: "Serving the society shaped my Identity",
        accent: "Indian",
        language: "English",
        link: "https://youtu.be/QGtrn3KDu1o?list=PLsRNoUx8w3rNYbB0H2_QZ-IA6RE8_iHyr",
      },
      {
        title: "Who am I? What is my identity?",
        accent: "Indian",
        language: "English",
        link: "https://youtu.be/mlr3QSzRQao?list=PLsRNoUx8w3rNYbB0H2_QZ-IA6RE8_iHyr",
      },
      {
        title: "Your identity is like a rainbow",
        accent: "Indian",
        language: "English",
        link: "https://youtu.be/_Qh4st8YY5k?list=PLsRNoUx8w3rNYbB0H2_QZ-IA6RE8_iHyr",
      },
      {
        title: "College is the start of your Learning",
        accent: "Indian",
        language: "English",
        link: "https://youtu.be/cakpwFdq_p8?list=PLsRNoUx8w3rNYbB0H2_QZ-IA6RE8_iHyr",
      },
      {
        title: "It’s okay to not have it figured it out",
        accent: "Indian",
        language: "English",
        link: "https://youtu.be/MOyGLHyr1ZQ?list=PLsRNoUx8w3rNYbB0H2_QZ-IA6RE8_iHyr",
      },
      {
        title: "How our experiences shape our identity",
        accent: "Indian",
        language: "English",
        link: "https://youtu.be/qCpoOI05nSs?list=PLsRNoUx8w3rNYbB0H2_QZ-IA6RE8_iHyr",
      },
      {
        title: "Be Innovative by Being Authentic",
        accent: "Pakistani",
        language: "English",
        link: "https://youtu.be/LlNxaXsWupE?list=PLsRNoUx8w3rMPNZCJMn3JLeXM3_WVN0s3",
      },
      {
        title: "Following your Ideals has a Price",
        accent: "Pakistani",
        language: "English",
        link: "https://youtu.be/RGWo6CReqXs?list=PLsRNoUx8w3rMPNZCJMn3JLeXM3_WVN0s3",
      },
      {
        title: "Follow your Intuition and take that Walk",
        accent: "Pakistani",
        language: "English",
        link: "https://youtu.be/DZdtdnUEIPE?list=PLsRNoUx8w3rMPNZCJMn3JLeXM3_WVN0s3",
      },
      {
        title: "Breaking barriers",
        accent: "Swiss",
        language: "English",
        link: "https://youtu.be/AVNsF05Ljwg?list=PLsRNoUx8w3rO9q4a4aWQnk0e8MdsCWUwF",
      },
      {
        title: 'Powerpoint about "size" ',
        accent: "Pakistani",
        language: "English",
        link: "https://youtu.be/Hb-3If8tqWU",
      },
      {
        title: "Delaying the Inner Critic",
        accent: "Swiss",
        language: "English",
        link: "https://youtu.be/qjIDYCjE8TE?list=PLsRNoUx8w3rO4zbIUb_uM2QOiWqd8Nx9H",
      },
      {
        title: "Why you should learn to code",
        accent: "Swiss",
        language: "English",
        link: "https://youtu.be/C6WJiUNZf7U?list=PLsRNoUx8w3rO4zbIUb_uM2QOiWqd8Nx9H",
      },
      {
        title: "Why is phobia a memory problem?",
        accent: "Swiss",
        language: "English",
        link: "https://youtu.be/BniY78Iwppc?list=PLsRNoUx8w3rO4zbIUb_uM2QOiWqd8Nx9H",
      },
      {
        title: "How to write a eulogy",
        accent: "Swiss",
        language: "English",
        link: "https://youtu.be/ttW998azc64?list=PLsRNoUx8w3rO4zbIUb_uM2QOiWqd8Nx9H",
      },
      {
        title: "How conspiracy beliefs reveal intuitive & reflective impulses",
        accent: "Swiss",
        language: "English",
        link: "https://youtu.be/b3m8wGkKWec?list=PLsRNoUx8w3rO4zbIUb_uM2QOiWqd8Nx9H",
      },
      {
        title: "How to make building robots a children’s game",
        accent: "Swiss",
        language: "English",
        link: "https://youtu.be/HDLzoki-oR8?list=PLsRNoUx8w3rO4zbIUb_uM2QOiWqd8Nx9H",
      },
      {
        title:
          "The Secrets of STEAM Innovation: 4 Steps to Unleash Your Creativity",
        accent: "Chinese",
        language: "English",
        link: "https://youtu.be/3jgFavIpqPg?list=PLsRNoUx8w3rMYq0weiDw_7UbZvlU5V-0C",
      },
      {
        title: "Why Your Nerdy Passion and Money Should be Mutually Exclusive",
        accent: "Chinese",
        language: "English",
        link: "https://youtu.be/fRGFv_5rsnY?list=PLsRNoUx8w3rMYq0weiDw_7UbZvlU5V-0C",
      },
      {
        title: "HAPPINESS DOES NOT HAVE A RECIPE. OR DOES IT?",
        accent: "Spanish",
        language: "English",
        link: "https://youtu.be/-kSiAai7lzI?list=PLsRNoUx8w3rPy67OzUvnnc98bHUPihxi3",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
