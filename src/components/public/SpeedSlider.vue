<template>
  <div class="q-pa-md">
    <q-badge color="secondary"> Model: {{ scale }} (0.1 to 3) </q-badge>
    <q-slider v-model="scale" @change="setScale(scale)" :min="0.1" :max="3" :step="0.1" color="green" />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'SpeedSlider',
  methods: {
    setScale: function (scale) {
      this.$store.commit('setScale', scale)
    },
  },
  setup() {
    return {
      scale: ref(1),
    }
  },
}
</script>
