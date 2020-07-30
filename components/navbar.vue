<template>
  <nav class="navbar">
    <h1>Q</h1>
    <a @click.prevent="logout" class="nav-link" href="#"> LOGOUT</a>
    <nuxt-link exact no-prefetch to="/">PROJECTS</nuxt-link>
  </nav>
</template>

<script>
export default {
  computed: {
    hasToken() {
      return this.$store.getters.hasToken
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
}
</script>
<style scoped>

.navbar{
  border-bottom: outset;
  border-color: #bfbfbf6b; 
  background-color: #fafafa;
  float: left;
  padding: 10px 30px;
  width: 100%; 
  overflow: hidden;
  min-width: 300px;
}
.navbar h1{
  display: inline-block;
  padding-top: 10px ;
}
.navbar a {
  color: #737373;
  text-align: center;
  float: right;
  padding: 14px 16px;
  text-decoration: none;
}
</style>
