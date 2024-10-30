<script>
export default {
  data: function () {
    return {
      newPillowParams: {},
    };
  },
  methods: {
    handleSubmit: function () {
      this.$emit("createPillow", this.newPillowParams);
      this.newPillowParams = {};
    },
  },
};
</script>

<template>
  <div>
    <h1>New Pillow</h1>
    <form v-on:submit.prevent="handleSubmit">
      <div>
        Name:
        <input type="text" v-model="newPillowParams.name" />
      </div>
      <div>
        Image_url:
        <input type="text" v-model="newPillowParams.image_url" />
      </div>
      <div>
        Description:
        <input type="text" v-model="newPillowParams.description" />
      </div>
      <div>
        Size:
        <input type="text" v-model="newPillowParams.size" />
      </div>
      <button type="submit">Create exercise</button>
    </form>
  </div>
</template>

<style></style>