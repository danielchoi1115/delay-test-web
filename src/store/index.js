import { createStore } from 'vuex'
// https://codepen.io/bramus/full/DEMQLg
export default createStore({
  state: {
    ball_diameter: 50,
    ball_y: 0,
    speed_y: 0,
    acc_y: 3,
    min_acc_y: 0,
    max_acc_y: 500,
    acc_y_step: 10,
    bottom: 250,
    bpm: 100,
    current_intv_id: 0,
  },
  getters: {
    getBallDiameter: state => {
      return state.ball_diameter / 10 + 'rem'
    },
    getBallY: state => {
      return state.ball_y / 10 + 'rem'
    },
    getAccY: state => {
      return state.acc_y / 10 + 'rem'
    },
    getBottom: state => {
      return state.bottom / 10 + 'rem'
    },
    getSpeedY: state => {
      return state.speed_y / 10 + 'rem'
    },
    getMinAccY: state => {
      return state.min_acc_y
    },
    getMaxAccY: state => {
      return state.max_acc_y
    },
    getAccYStep: state => {
      return state.acc_y_step
    },
    getBPM: state => {
      return state.bpm
    },
    getCurrentIntvID: state => {
      return state.current_intv_id
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
      state.ball_y = state.ball_y + state.speed_y
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
