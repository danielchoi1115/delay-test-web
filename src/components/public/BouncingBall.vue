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
  transition: all 0.01s linear;
}
</style>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BouncingBall',
  computed: mapGetters({
    ball_y: 'getBallY',
    ball_diameter: 'getBallDiameter',
  }),
  data() {
    return {
      colorFromScript: 'white',
    }
  },
}
</script>
