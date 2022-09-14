<template>
  <div class="ball">
    <!-- <span class="info">Y : 0, G : 0</span> -->
  </div>
</template>
<style>
.ball {
  background-color: white;
  width: 50px;
  height: 50px;
  position: absolute;
  border-radius: 50%;
  box-shadow: 0 0 15px 5px #08f;
  left: 50%;
  top: v-bind('ballY');
  transform: translateX(-50%);
}
</style>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BouncingBall',
  computed: mapGetters({
    ballY: 'getBallYpx',
  }),
  data() {
    return {
      colorFromScript: 'white',
    }
  },
}
</script>
