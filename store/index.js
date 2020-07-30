export const state = () => ({
    token: null
})
  
export const mutations = {
  setToken(state, token) {
    state.token = token;
    localStorage.setItem('token', token);
    this.$axios.setHeader('Authorization', 'Bearer ' + token );
  },
  clearToken(state) {
    state.token = null;
    localStorage.setItem('token', null);
    this.$axios.setToken(false);
    this.$axios.setHeader(false);
  }
}
  
export const actions = {
  async login({commit},user) {
    await this.$axios.$post('auth/login', user).then((res)=>{
      commit('setToken', res.token);
      this.$router.push('/');
    })
  },
  async logout({commit}) {
    commit('clearToken');
  },
}
  
export const getters = {
    hasToken: s => !!s.token
  }