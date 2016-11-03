<template lang="html">
  <div>
    <div v-for="post in posts">
      <h3>{{post.title}}</h3>
      <p>{{post.body}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      posts: []
    }
  },
  created () {
    this.$http.get('/api/post')
    .then((response) => {
      this.posts = response.body
    }, (response) => {
      console.log(response)
    })
  }
}
</script>

<style lang="css">
</style>
