import { createStore } from 'vuex'

export default createStore({
  state: {
    ballY: 0,
    gravity: 1,
    scale: 1,
  },
  getters: {
    getBallY: state => {
      return state.ballY
    },
    getBallYpx: state => {
      return state.ballY + 'px'
    },
    getGravity: state => {
      return state.gravity
    },
    getScale: state => {
      return state.scale
    },
  },
  mutations: {
    calculateNewBallY(state) {
      state.ballY = state.ballY + state.gravity
    },
    increaseGravity(state) {
      state.gravity += state.scale
    },
    checkGravity(state) {
      if (state.ballY > 420) {
        state.gravity = -state.gravity
      }
    },
    setScale(state, value) {
      state.scale = value
    },
  },
  actions: {},
})
