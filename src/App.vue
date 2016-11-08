<template lang="html">
  <div class="router">
    <div class="navbar">
      <router-link to="/" exact>Home</router-link>
      <router-link to="/post">Post</router-link>
      <div class="right">
        <p v-if="name">Logged in as {{name}}</p>
        <input v-if="name" type="button" v-on:click="logout" value="Logout">
        <router-link v-if="!name" to="/login">Login</router-link>
        <router-link v-if="!name" to="/signup">Sign Up</router-link>
      </div>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    logout () {
      this.$http.get('/auth/logout')
        .then((res) => {
          this.$store.commit('setName', '')
        })
    }
  },
  computed: {
    name () {
      return this.$store.state.username
    }
  },
  mounted () {
      this.$http.get('/auth/check')
        .then((res) => {
          this.$store.commit('setName', res.body.username)
        })
  }
}
</script>

<style lang="css">
@import url('https://fonts.googleapis.com/css?family=Hind+Guntur');
a {
  text-decoration: none;
  color: #0000EE;
}
p {
  margin: 0
}
.container {
  width: 90%;
  margin: 0 auto;
}
.router {
  font-family: 'Hind Guntur', sans-serif;
  width: 90%;
  margin: 0 auto;
}
.router-link-active {
  color: green;
}
.right {
  float: right;
}
.error {
  background-color: #E8877F;
  border-radius: 10px;
  padding: .5em 1em;
}
.error h3 {
  margin: 0;
}
</style>
