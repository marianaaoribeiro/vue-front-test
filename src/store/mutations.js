const mutations = {
  showSnackbar(state, value) {
    state.snackbar.show = true
    state.snackbar.text = value.text
    state.snackbar.timeout = value.timeout ? value.timeout : 3000
    state.snackbar.color = value.color ? value.color : 'primary'
  },
  setUser(state, value) {
    state.user = value
  },
}

export default mutations
