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
    },
  },
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
      <button type="submit">Update pillow</button>
    </form>
  </div>
</template>

<style>
form {
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

form div {
  margin-bottom: 1rem;
}

input[type="text"] {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

button[type="submit"] {
  background-color: #27ae60;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;
  transition: background-color 0.3s;
}

button[type="submit"]:hover {
  background-color: #219a52;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
}
</style>
