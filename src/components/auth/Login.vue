<template>
  <div class="login container">
    <form  class="card-panel" @submit.prevent="login">
      <h2 class="center deep-purple-text">Login</h2>
      <div class="field">
        <label for="email">Email:</label>
        <input type="email" name="email" v-model="email">
      </div>
      <div class="field">
        <label for="password">Password:</label>
        <input type="password" name="password" v-model="password">
      </div>
      <p class="red-text center" v-if="feedback">{{feedback}}</p>
      <div class="field center">
        <button class="btn deep-purple">Login</button>
      </div>
    </form>
  </div>
</template>


<script>
import db from '@/firebase/init'
import firebase from 'firebase'
export default {
  name: 'Login',
  data(){
    return{
      email: null,
      password: null,
      alias: null,
      feedback: null,
      slug: null,
    }
  },
  methods:{
    login(){
      if(this.email && this.password){
        this.feedback = null
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          console.log(user.user)
          this.$router.push({name: 'GMap'})
        }).catch(err => {
          this.feedback = err.message
        })
      }else{
        this.feedback = 'All Fields are required'
      }
    }
  }
}
</script>

<style>
.login{
  max-width: 400px;
  margin-top: 60px;
}
.login h2{
  font-size: 2.4em;
}
.login .field{
  margin-bottom: 16px;
}
</style>