<template>
  <div class="q-pa-md">
    <q-badge color="secondary"> Model: {{ scale }} ({{ min_acc_y }} to {{ max_acc_y }}) </q-badge>
    <q-slider
      v-model="scale"
      @change="setBPM(scale)"
      :min="min_acc_y"
      :max="max_acc_y"
      :step="acc_y_step"
      color="green"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
import { mapGetters } from 'vuex'

export default {
  name: 'SpeedSlider',
  methods: {
    setBPM: function (scale) {
      this.$store.commit('setBPM', scale)
    },
  },
  computed: mapGetters({
    // arrow functions can make the code very succinct!
    min_acc_y: 'getMinAccY',
    max_acc_y: 'getMaxAccY',
    acc_y_step: 'getAccYStep',
  }),
  setup() {
    return {
      scale: ref(10),
    }
  },
}
</script>
