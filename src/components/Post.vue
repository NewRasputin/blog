<template lang="html">
  <div >
    <label for="title">Title:</label>
    <input v-model="title" name="title" type="text">
    <label for="body">Body:</label>
    <textarea v-model="body" name="body"></textarea>
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
      }, (response) => {
        console.log(response)
      })
    }
  }
}
</script>

<style lang="css">
  textarea {
    resize: none;
  }
  input, label {
    display: block;
  }
</style>
