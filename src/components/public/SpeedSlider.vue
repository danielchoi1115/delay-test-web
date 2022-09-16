<template>
  <div class="q-pa-md">
    <q-badge color="secondary"> Model: {{ scale }} ({{ min_bpm }} to {{ max_bpm }}) </q-badge>
    <q-slider
      v-model="scale"
      @change="setBPM(scale)"
      :min="min_bpm"
      :max="max_bpm"
      :step="bpm_step"
      markers
      snap
      color="green"
    />
  </div>
  <div>
    BPM
    <p class="big-number">{{ tweened.toFixed(0) }}</p>
  </div>
</template>
<style>
.big-number {
  font-weight: bold;
  font-size: 2em;
}
</style>

<script>
import { ref } from 'vue'
import { mapGetters } from 'vuex'
import gsap from 'gsap'

export default {
  name: 'SpeedSlider',
  methods: {
    setBPM: function (scale) {
      this.$store.commit('setBPM', scale)
    },
  },
  computed: mapGetters({
    // arrow functions can make the code very succinct!
    min_bpm: 'getMinAccY',
    max_bpm: 'getMaxAccY',
    bpm_step: 'getAccY_pxStep',
  }),
  setup() {
    return {
      scale: ref(10),
    }
  },
  data() {
    return {
      number: 0,
      tweened: 0,
    }
  },
  watch: {
    scale(n) {
      gsap.to(this, { duration: 0.5, tweened: Number(n) || 0 })
    },
  },
}
</script>
