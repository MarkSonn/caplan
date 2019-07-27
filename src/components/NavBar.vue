<template>
  <div>
    <v-app-bar
      color="#c22300" dark app>
      <v-toolbar-title>Yeats<span v-if='user'> | <small>{{ user }}</small></span></v-toolbar-title>
      <v-spacer />
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
export default {
  name: 'NavBar',
  data: () => ({
    themeColor: '#c22300',
    themeColorDark: '#b30000',
    loggedIn: false,
    user: ''
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
