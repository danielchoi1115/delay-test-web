<template>
  <div class="purse"></div>
</template>
<style>
.purse {
  border: 5px solid rgb(0, 75, 151);
  opacity: 0;
  width: 30px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
}
</style>
<script>
import store from '@/store'

export default {
  name: 'PurseEffect',
  data() {
    return {
      ball_diameter: store.getters.getBallDiameter_px,
    }
  },
  mounted() {
    const duration = 1000
    const ripple_animation = [
      { width: '0', opacity: 1, height: '0', offset: 0 },
      { opacity: 0.5, offset: 0.7 },
      { width: '300px', height: '100px', opacity: 0, offset: 1 },
    ]

    const ripple_timing = {
      duration: duration,
      iterations: 1,
    }

    const pulse = this.$el
    pulse.animate(ripple_animation, ripple_timing)
    setTimeout(function () {
      pulse.parentNode.remove()
    }, duration)
  },
}
</script>
