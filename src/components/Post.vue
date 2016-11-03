<template lang="html">
  <div >
    <label for="title">Title:</label>
    <input v-model="title" name="title" type="text">
    <label for="body">Body:</label>
    <textarea v-model="body" name="body"></textarea>
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
