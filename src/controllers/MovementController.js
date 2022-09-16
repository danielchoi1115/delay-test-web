import store from '@/store'

function startMoving() {
  var bpm = store.getters.getBPM
  oscillate(bpm)
}

function oscillate() {
  var interval = store.getters.getInterveal
  var current_intv_id = setInterval(function () {
    store.commit('updateAccY')
    if (store.getters.isAtBottom) {
      var audio = store.getters.getAudio
      setTimeout(function () {
        audio.play()
      }, interval)
    }
  }, interval)
  store.commit('setCurrentIntvID', current_intv_id)
}
function stopMoving() {
  var current_intv_id = store.getters.getCurrentIntvID
  clearInterval(current_intv_id)
}
function resetInterval(bpm) {
  stopMoving()
  oscillate(bpm)
}

export { startMoving, oscillate, resetInterval }
