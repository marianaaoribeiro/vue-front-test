const actions = {
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      try {
        commit('logout')
        return resolve()
      } catch (error) {
        return reject(error)
      }
    })
  },
}

export default actions
