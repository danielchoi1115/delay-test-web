<template>
  <div @click="startInterval()">Click Me</div>
  <button @click="resetMoving()">Reset</button>
  <p>accY: {{ accY }}</p>
  <p>speedY: {{ speedY }}</p>
  <p>ball y: {{ ball_y }}</p>
  <p>avava: {{ a }}</p>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <BounceHome>
        <template v-slot:ball>
          <BouncingBall />
        </template>
        <template v-slot:floor>
          <BounceFloor />
        </template>
        <template v-slot:slider>
          <SpeedSlider />
        </template>
      </BounceHome>
    </q-page-container>
  </q-layout>
</template>

<style>
body {
  margin: 0;
  background-color: #024;
  color: white;
  height: 100vh;
  position: relative;
}
</style>

<script>
import { ref } from 'vue'
import { BounceHome } from './views'
import { BouncingBall, BounceFloor, SpeedSlider } from './components'
import { mapGetters, mapState } from 'vuex'
import { startMoving, resetInterval, resetMoving } from './controllers'
export default {
  name: 'LayoutDefault',

  components: {
    BounceHome,
    BouncingBall,
    BounceFloor,
    SpeedSlider,
  },
  computed: {
    ...mapState(['bpm']),
    ...mapGetters({
      ball_y: 'getBallY_px',
      accY: 'getAccY_px',
      speedY: 'getSpeedY_px',
      a: 'getTransition',
    }),
  },
  watch: {
    bpm(newValue, oldValue) {
      resetInterval(newValue)
    },
  },
  setup() {
    return {
      leftDrawerOpen: ref(false),
    }
  },
  methods: {
    startInterval() {
      startMoving()
    },
    resetMoving() {
      resetMoving()
    },
  },
}
</script>
