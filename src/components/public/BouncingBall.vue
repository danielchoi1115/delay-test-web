<template>
  <div class="ball">
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
  top: v-bind('ball_y');
  transition: v-bind('transition');
}
</style>
<script>
import { mapGetters } from 'vuex'
import store from '@/store'
export default {
  name: 'BouncingBall',
  computed: mapGetters({
    ball_y: 'getBallY_px',
    transition: 'getTransition',
  }),
  methods: {},
  data() {
    return {
      colorFromScript: 'white',
      ball_diameter: store.getters.getBallDiameter_px,
    }
  },
}
</script>
