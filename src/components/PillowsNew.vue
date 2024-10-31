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
