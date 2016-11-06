<template lang="html">
  <div>
    <div v-if="errmsg" class="right error">
      <h3>{{errmsg}}</h3>
    </div>
    <label for="username">Username:</label>
    <input type="text" name="username" v-model="username">
    <label for="password">Password:</label>
    <input type="text" name="password" v-model="password">
    <input type="button" v-on:click="submit" value="Submit">
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      errmsg: ''
    }
  },
  methods: {
    submit () {
      this.$http.post('/auth/login', {
        username: this.username,
        password: this.password
      }).then((res) => {
        if (res.body === 'Success') {
          this.$router.push('/')
        }
      }, (res) => {
        this.$set(this.$data, 'errmsg', res.body)
      })
    }
  }
}
</script>

<style lang="css" scoped>
  h3 {
    margin: 0;
  }
</style>
