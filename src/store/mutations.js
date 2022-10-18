const mutations = {
  showSnackbar(state, value) {
    state.snackbar.show = true
    state.snackbar.text = value.text
    state.snackbar.timeout = value.timeout ? value.timeout : 3000
    state.snackbar.color = value.color ? value.color : 'primary'
  },
  login(state, value) {
    localStorage.setItem('user', JSON.stringify(value))
    state.isAuthenticated = true
  },
  logout(state) {
    state.isAuthenticated = false
    localStorage.clear()
  },
  checkAuthentication(state) {
    state.isAuthenticated = localStorage.getItem('user') ? true : false
  },
  setUser(state, value) {
    state.user = value
  },
}

export default mutations
