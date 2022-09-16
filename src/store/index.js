import { createStore } from 'vuex'
// https://codepen.io/bramus/full/DEMQLg
export default createStore({
  state: {
    ball_diameter: 50,
    ball_y: 0,
    speed_y: 0,
    acc_y: 20,
    min_bpm: 10,
    max_bpm: 180,
    bpm_step: 10,
    bottom: 450,
    bpm: 1,
    current_intv_id: 0,
  },
  getters: {
    getBallDiameter_px: state => {
      return state.ball_diameter + 'px'
    },
    getBallY: state => {
      return state.ball_y
    },
    getBallY_px: state => {
      return state.ball_y + 'px'
    },
    getAccY: state => {
      return state.acc_y
    },
    getAccY_px: state => {
      return state.acc_y + 'px'
    },
    getBottom: state => {
      return state.bottom
    },
    getBottom_px: state => {
      return state.bottom + 'px'
    },
    getSpeedY_px: state => {
      return state.speed_y + 'px'
    },
    getMinAccY: state => {
      return state.min_bpm
    },
    getMaxAccY: state => {
      return state.max_bpm
    },
    getAccY_pxStep: state => {
      return state.bpm_step
    },
    getBPM: state => {
      return state.bpm
    },
    getCurrentIntvID: state => {
      return state.current_intv_id
    },
    isAtBottom: state => {
      var y = state.ball_y
      var b = state.bottom
      return Math.abs(y - b) / b < 0.1
    },
    getAudio: state => {
      return new Audio(require('../assets/sound_effect_drumstick.mp3'))
    },
    getInterveal: state => {
      // calls = total number of  function calls needs for one revolution of the ball.
      var calls = Math.round(-0.5 + 0.5 * Math.sqrt(1 + (8 * state.bottom) / state.acc_y)) * 2

      // interval is 1000 / ((BPM/60) * n)
      return Math.round((1000 * 60) / (state.bpm * calls))
    },
    getTransition: (state, getters) => {
      var intv = getters.getInterveal
      return 'all ' + intv + 'ms linear'
    },
  },
  mutations: {
    updateBallY(state) {
      state.ball_y = state.ball_y + state.speed_y
    },
    accerateBallY(state) {
      state.speed_y += state.acc_y
    },
    updateAccY(state) {
      if (state.ball_y >= state.bottom) {
        state.speed_y = -state.speed_y
      } else {
        state.speed_y += state.acc_y
      }

      var new_ball_y = state.ball_y + state.speed_y
      if (new_ball_y > state.bottom) {
        new_ball_y = state.bottom
      }
      state.ball_y = new_ball_y
    },
    setAccY(state, value) {
      state.acc_y = value
      state.speed_y = 0
      state.ball_y = 0
    },
    setCurrentIntvID(state, value) {
      state.current_intv_id = value
    },
    setBPM(state, value) {
      state.bpm = value
    },
  },
  actions: {},
})
