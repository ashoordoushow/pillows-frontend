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
      <img v-bind:src="pillow.image_url" />
      <p>Description: {{ pillow.description }}</p>
      <p>Size: {{ pillow.size }}</p>
      <button v-on:click="$emit('showPillow', pillow)">More info</button>
    </div>
  </div>
</template>

<style></style>