<script>
import PillowsIndex from "./PillowsIndex.vue";
import axios from "axios";
import PillowsNew from "./PillowsNew.vue";

export default {
  components: {
    PillowsIndex,
    PillowsNew,
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
      axios.get("http://localhost:5000/pillows.json").then((response) => {
        console.log("pillows index", response);
        this.pillows = response.data;
      });
    },
    handleCreatePillow: function (params) {
      axios
        .post("http://localhost:5000/pillows.json", params)
        .then((response) => {
          console.log("pillows create", response);
          this.pillows.push(response.data);
        })
        .catch((error) => {
          console.log("pillows create error", error.response)
        });
    },
  },
};
</script>

<template>
  <main>
    <PillowsNew v-on:createPillow="handleCreatePillow" />
    <PillowsIndex v-bind:pillows="pillows" />
  </main>
</template>

<style></style>