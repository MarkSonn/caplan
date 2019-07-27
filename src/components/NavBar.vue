<template>
  <div>
    <v-app-bar
      color="#c22300" dark app>
      <v-toolbar-title class="display-1 font-weight-thin pa-5"><router-link to='/' class="noStyle">Yeats</router-link></v-toolbar-title>
      <v-btn @click="$router.push(navButton.link)" text v-for="(navButton, i) in navButtons" :key='i'>{{ navButton.name }}</v-btn>
      <v-spacer />
      <span v-if='user'> <small>Logged in as {{ user }}</small></span>
      <v-btn v-if="loggedIn" @click="logOut()" color="#800000" pa-5>
        Log Out<v-icon right>mdi-lock</v-icon>
      </v-btn>
      <template v-else>
        <v-btn @click="signUpModal = true" color="#600000" class="mx-4">
          Sign up<v-icon right>mdi-check</v-icon>
        </v-btn>
        <v-btn @click="googleSignIn()" color="#800000">
          Log In<v-icon right>mdi-lock-open</v-icon>
        </v-btn>
      </template>
    </v-app-bar>

    <v-dialog v-model="signUpModal" width="500">
      <v-card>
        <v-card-title class="headline primary white--text" primary-title>
          Sign up!
        </v-card-title>

        <v-card-text>
          Lol, nice try you silly goofball!
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="signUpUser" color="primary">submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { firebaseCore, auth } from '@/firebase'
export default {
  name: 'NavBar',
  data: () => ({
    signUpModal: false,
    loggedIn: false,
    user: '',
    navButtons: [
      { name: 'Yeaters', link: '/yeaters' },
      { name: 'Yoters', link: '/yoters' }
    ]
  }),
  methods: {
    signUpUser() {
      console.log('Signing up user')
      this.signUpModal = false
    },
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

<style scoped>
  .noStyle {
    text-decoration: none;
    color: inherit;
  }
</style>
