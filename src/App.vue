<template>
  <div @click="startInterval()">Click Me</div>
  <p>gravity: {{ grav }}</p>
  <p>scale: {{ sca }}</p>
  <p>ball y: {{ ballY }}</p>
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
import { mapGetters } from 'vuex'
import { moveBall } from './controllers'
export default {
  name: 'LayoutDefault',

  components: {
    BounceHome,
    BouncingBall,
    BounceFloor,
    SpeedSlider,
  },
  computed: mapGetters({
    ballY: 'getBallYpx',
    grav: 'getGravity',
    sca: 'getScale',
  }),
  setup() {
    return {
      leftDrawerOpen: ref(false),
    }
  },
  methods: {
    startInterval() {
      setInterval(function () {
        moveBall()
      }, 500)
    },
  },
}
</script>
