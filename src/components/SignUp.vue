<template lang="html">
  <div>
    <div v-if="errmsg" class="right error">
      <h3>{{errmsg}}</h3>
    </div>
    <label for="username">Username:</label>
    <input type="text" name="username" v-model="username">
    <label for="password">Password:</label>
    <input type="text" name="password" v-model="password">
    <label for="retypepassword">Retype Password:</label>
    <input type="text" name="retypepassword" v-model="retypepassword">
    <input type="button" v-on:click="submit" value="Submit">
    <p v-if="errmsg">{{errmsg}}</p>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data () {
    return {
      username: '',
      password: '',
      retypepassword: '',
      errmsg: ''
    }
  },
  computed: {
    passwordsMatch () {
      // return true is passwords match
      return this.password === this.retypepassword
    }
  },
  methods: {
    submit () {
      if (this.username) {
        if (this.passwordsMatch) {
          // post username and pass to signup route
          this.$http.post('/auth/signup', {
            username: this.username,
            password: this.password
          }).then((res) => {
            if (res.body === 'Success') {
              // redirect to home
              this.$router.push('/')
            }
          }, (res) => {
            // set errmsg from response
            this.$set(this.$data, 'errmsg', res.body)
          })
        } else {
          console.error('Passwords don\'t match');
        }
      } else {
        console.error("Username required")
      }
    }
  }
}
</script>

<style lang="css">
</style>
