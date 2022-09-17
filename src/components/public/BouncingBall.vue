<template>
  <div class="ball" @click="startMoving()">
    <!-- <span class="info">Y : 0, G : 0</span> -->
  </div>
</template>
<style>
.ball {
  background-color: white;
  width: v-bind('ball_diameter');
  height: v-bind('ball_diameter');
  position: absolute;
  border-radius: 50%;
  box-shadow: 0 0 15px 5px #08f;
  left: 50%;
  /* top: calc(v-bind('ball_y') * 1px); */
  /* transition: v-bind('transition'); */
  z-index: 999;
  animation: bounce;
  animation-duration: 3s;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(0.3, 0, 0.85, 0.5);
  animation-iteration-count: infinite;
}
@keyframes bounce {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(0, 420px, 0);
  }
}
</style>
<script>
import { mapGetters, mapState } from 'vuex'
import store from '@/store'
export default {
  name: 'BouncingBall',
  computed: {
    ...mapState(['ball_y']),
    ...mapGetters({
      transition: 'getTransition',
    }),
  },
  methods: {
    startMoving() {
      const duration = 1000
      const ripple_animation = [
        { top: 0, offset: 0 },
        { top: '420px', offset: 0.5 },
        { top: 0, offset: 1 },
      ]

      const ripple_timing = {
        duration: duration,
        iterations: Infinity,
      }

      const pulse = this.$el
      pulse.animate(ripple_animation, ripple_timing)
    },
  },
  data() {
    return {
      colorFromScript: 'white',
      ball_diameter: store.getters.getBallDiameter_px,
    }
  },
}
</script>
