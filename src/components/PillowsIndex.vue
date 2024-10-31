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
    <div class="pillows-grid">
      <div class="pillow-card" v-for="pillow in pillows" v-bind:key="pillow.id">
        <h2>{{ pillow.name }}</h2>
        <img v-bind:src="pillow.image_url" />
        <p>Description: {{ pillow.description }}</p>
        <p>Size: {{ pillow.size }}</p>
        <button v-on:click="$emit('showPillow', pillow)">More info</button>
      </div>
    </div>
  </div>
</template>

<style>
.pillows-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.pillow-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  transition: transform 0.2s;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.pillow-card:hover {
  transform: translateY(-5px);
}

.pillow-card img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}

.pillow-card button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.pillow-card button:hover {
  background-color: #2980b9;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
}
</style>
