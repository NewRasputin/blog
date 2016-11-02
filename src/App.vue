<template lang="html">
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/post">Post</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      message: 'Hello from App.vue!'
    }
  }
}
</script>

<style lang="css">
</style>
