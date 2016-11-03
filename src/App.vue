<template lang="html">
  <div class="router">
    <div class="navbar">
      <router-link to="/" exact>Home</router-link>
      <router-link to="/post">Post</router-link>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="css">
@import url('https://fonts.googleapis.com/css?family=Hind+Guntur');
a {
  text-decoration: none;
  color: #0000EE;
}
.container {
  width: 90%;
  margin: 0 auto;
}
.router {
  font-family: 'Hind Guntur', sans-serif;
}
.router-link-active {
  color: green;
}
</style>
