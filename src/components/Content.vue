<script>
import PillowsIndex from "./PillowsIndex.vue";
import axios from "axios";
import PillowsNew from "./PillowsNew.vue";
import Modal from "./Modal.vue";
import PillowsShow from "./PillowsShow.vue";

export default {
  components: {
    PillowsIndex,
    PillowsNew,
    Modal,
    PillowsShow,
  },
  data: function () {
    return {
      pillows: [],
      currentPillow: {},
      isPillowsShowVisible: false,
    };
  },
  created: function () {
    this.handleIndexPillows();
  },
  methods: {
    handleIndexPillows: function () {
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
          console.log("pillows create error", error.response);
        });
    },
    handleShowPillow: function (pillow) {
      console.log("handleShowPillow", pillow);
      this.currentPillow = pillow;
      this.isPillowsShowVisible = true;
    },
    handleUpdatePillow: function (id, params) {
      console.log("handleUpdatePillow", id, params);
      axios
        .patch(`http://localhost:5000/pillows/${id}.json`, params)
        .then((response) => {
          console.log("pillows update", response);
          this.pillows = this.pillows.map((pillows) => {
            if (pillows.id === response.data.id) {
              return response.data;
            } else {
              return pillows;
            }
          });
          this.handleClose();
        })
        .catch((error) => {
          console.log("pillows update error", error.response);
        });
    },
    handleClose: function () {
      this.isPillowsShowVisible = false;
    },
  },
};
</script>

<template>
  <main>
    <PillowsNew v-on:createPillow="handleCreatePillow" />
    <PillowsIndex v-bind:pillows="pillows" v-on:showPillow="handleShowPillow" />
    <Modal v-bind:show="isPillowsShowVisible" v-on:close="handleClose">
      <PillowsShow v-bind:pillow="currentPillow" v-on:updatePillow="handleUpdatePillow" />
    </Modal>
  </main>
</template>

<style>
main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Arial", sans-serif;
}
</style>
