import store from '@/store'

function startMoving() {
  var bpm = store.getters.getBpm
  oscillate(bpm)
}

function oscillate(bpm) {
  var frequency = getFrequency(bpm)
  var current_intv_id = setInterval(function () {
    store.commit('updateAccY')
  }, frequency)
  store.commit('setCurrentIntvID', current_intv_id)
}

function getFrequency(bpm) {
  return Math.round(5000 / bpm)
}

function resetFrequency(bpm) {
  var current_intv_id = store.getters.getCurrentIntvID
  clearInterval(current_intv_id)
  oscillate(bpm)
}

export { startMoving, oscillate, resetFrequency }
