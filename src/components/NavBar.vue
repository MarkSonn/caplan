<template>
  <div>
    <v-app-bar
      color="#c22300" dark app>
      <v-toolbar-title class="display-1 font-weight-thin pa-5">Yeats</v-toolbar-title>
      <v-btn text v-for="navButton in navButtons">
        {{ navButton.name }}
      </v-btn>
      <v-spacer />
      <span v-if='user'> | <small>{{ user }}</small></span>
      <v-btn v-if="loggedIn" @click="logOut()" color="#800000">
        Log Out<v-icon right>mdi-lock</v-icon>
      </v-btn>
      <v-btn v-else @click="googleSignIn()" color="#800000">
        Log In<v-icon right>mdi-lock-open</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import { firebaseCore, auth } from '@/firebase'
export default {
  name: 'NavBar',
  data: () => ({
    loggedIn: false,
    user: '',
    navButtons: [
      {name: 'Home', target: ''},
      {name: 'Donate', target: ''},
      {name: 'Map', target: ''}
    ]
  }),
  methods: {
    async googleSignIn() {
      console.log('logging in')
      var provider = new firebaseCore.auth.GoogleAuthProvider()
      try {
        const result = await auth.signInWithPopup(provider)
        // var token = result.credential.accessToken
        this.user = result.user.displayName
        this.loggedIn = true
        console.log('lol', this.user)
      } catch (error) {
        console.log('Auth oopsies', error)
      }
    },
    async logOut () {
      console.log('logging out')
      try {
        await auth.signOut()
        this.loggedIn = false
        this.user = ''
      } catch (error) {
        console.log('Oh no, could not log out', error)
      }
    }
  }
}
</script>
