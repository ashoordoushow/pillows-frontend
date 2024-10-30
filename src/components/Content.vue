<script>
import PillowsIndex from "./PillowsIndex.vue";
import axios from "axios";

export default {
  components: {
    PillowsIndex,
  },
  data: function () {
    return {
      pillows: [],
    };
  },
  created: function () {
    this.handleIndexPhotos();
  },
  methods: {
    handleIndexPhotos: function () {
      axios.get("http://localhost:3000/pillows.json").then((response) => {
        console.log("pillows index", response);
        this.pillows = response.data;
      });
    },
  },
};
</script>

<template>
  <main>
    <PillowsIndex v-bind:pillows="pillows" />
  </main>
</template>

<style></style>