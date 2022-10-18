const getters = {
  isAuthenticated: (state) => {
    return state.isAuthenticated
  },
  snackbar: (state) => state.snackbar,
  user: (state) => state.user,
}

export default getters
