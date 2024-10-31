<script>
export default {
  props: {
    pillow: Object,
  },
  data: function () {
    return {
      editPillowParams: {},
    };
  },
  created: function () {
    this.editPillowParams = { ...this.pillow };
  },
  methods: {
    handleSubmit: function () {
      this.$emit("updatePillow", this.pillow.id, this.editPillowParams);
    }
  }
};
</script>

<template>
  <div>
    <h1>Pillow information</h1>
    <p>Name: {{ pillow.name }}</p>
    <p>Image_url: {{ pillow.image_url }}</p>
    <p>Description: {{ pillow.description }}</p>
    <p>Size: {{ pillow.size }}</p>
    <form v-on:submit.prevent="handleSubmit">
      <div>
        Name:
        <input v-model="editPillowParams.name" type="text" />
      </div>
      <div>
        Image_url:
        <input v-model="editPillowParams.image_url" type="text" />
      </div>
      <div>
        Description:
        <input v-model="editPillowParams.description" type="text" />
      </div>
      <div>
        Size:
        <input v-model="editPillowParams.size" type="text" />
      </div>
    </form>
  </div>
</template>

<style></style>