<template lang="html">
  <div>
    <h3 v-if="!posts[0]">There are no posts to display</h3>
    <div class="posts" v-for="post in posts">
      <h3>{{post.title}} - {{humanDate(post.createdAt)}}</h3>
      <p class="body">{{post.body}}</p>
      <hr>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'Home',
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    this.$http.get('/api/post')
    .then((response) => {
      this.posts = response.body
    }, (response) => {
      console.log(response)
    })
  },
  methods: {
    humanDate (time) {
      return moment(time).format('MM/DD/YYYY')
    }
  }
}
</script>

<style lang="css">
  .body {
    width: 90%;
    margin: 0 auto;
  }
</style>
