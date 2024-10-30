<script>
export default {
  props: {
    pillows: Array,
  },
};
</script>

<template>
  <div>
    <h1>All pillows</h1>
    <div v-for="pillow in pillows" v-bind:key="pillow.id">
      <h2>{{ pillow.name }}</h2>
      <img v-bind:src="pillow.url" />
      <p>Width: {{ pillow.width }}</p>
      <p>Height: {{ pillow.height }}</p>
    </div>
  </div>
</template>

<style></style>