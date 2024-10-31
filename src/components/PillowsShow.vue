<script>
export default {
  props: {
    pillow: Object,
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
  </div>
</template>

<style></style>