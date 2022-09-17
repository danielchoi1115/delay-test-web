import store from '@/store'

function resetMoving() {
  stopMoving()
  store.commit('resetMoving')
}

function startMoving() {
  var bpm = store.getters.getBPM
  oscillate(bpm)
}

// function oscillate() {
//   var interval = store.getters.getInterval
//   var inte = 0
//   var current_intv_id = setInterval(function () {
//     store.commit('updateAccY', inte)
//     inte += 1
//     if (store.getters.isAtBottom) {
//       var audio = store.getters.getAudio
//       setTimeout(function () {
//         audio.play()
//       }, interval)
//     }
//   }, interval)
//   store.commit('setCurrentIntvID', current_intv_id)
// }
function oscillate() {
  var interval = store.getters.getInterval
  var inte = 0
  var current_intv_id = setInterval(function () {
    store.commit('oscillate')
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

export { startMoving, oscillate, resetInterval, resetMoving }
