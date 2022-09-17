<template>
  <div class="floor" ref="floor"></div>

  <button @click="pulse">hahahahaha</button>
</template>
<style>
.floor {
  background-color: white;
  width: 100%;
  height: 20px;
  position: absolute;
  box-shadow: 0 0 15px 5px #08f;
  top: 460px;
  left: calc(v-bind('ball_diameter') * 0.5px);
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
</style>
<script>
import store from '@/store'
import { createApp } from 'vue'
import { mapGetters, mapState } from 'vuex'
import PurseEffectVue from './PurseEffect.vue'
export default {
  name: 'BouncingBall',
  computed: {
    ...mapState(['ball_y', 'ball_diameter']),
    ...mapGetters({
      interval: 'getInterval',
    }),
  },
  data() {
    return {
      bottom: store.getters.getBottom,
      intv: 0,
    }
  },
  watch: {
    interval(i) {
      this.intv = i
    },
    ball_y(y) {
      if (y >= this.bottom) {
        const floor = this.$refs.floor
        setTimeout(function () {
          var ComponentApp = createApp(PurseEffectVue)
          const wrapper = document.createElement('div')
          wrapper.setAttribute(
            'style',
            'display: flex; justify-content: center; align-items: center;align-content: center;',
          )
          ComponentApp.mount(wrapper)
          floor.appendChild(wrapper)
        }, this.interval)
      }
    },
  },
}
</script>
