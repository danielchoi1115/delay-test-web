import store from '@/store'

function moveBall() {
  store.commit('checkGravity')
  store.commit('calculateNewBallY')
  store.commit('increaseGravity')
}

export { moveBall }
