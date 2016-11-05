<template lang="html">
  <div class="form">
    <label for="title">Title:</label>
    <input class="title" v-model="title" name="title" type="text">
    <label for="body">Body:</label>
    <textarea class="body" rows="15" v-model="body" name="body"></textarea>
    <input type="button" v-on:click="submit" value="Submit">
  </div>
</template>

<script>
export default {
  name: 'Post',
  data () {
    return {
      title: '',
      body: ''
    }
  },
  methods: {
    submit () {
      this.$http.post('/api/post', {
        title: this.title,
        body: this.body
      }).then((response) => {
        console.log(response)
        if (response.body === 'Success') {
          this.$router.push('/')
        }
      }, (response) => {
        console.log(response)
      })
      this.$data.title = ''
      this.$data.body = ''
    }
  }
}
</script>

<style lang="css">
  textarea {
    resize: none;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
  }
  input, label {
    display: block;
  }
  .form {
    width: 60%;
    margin: 0 auto;
  }
  .title {
    width: 100%;
  }
  .body {
    width: 100%;
  }
</style>
