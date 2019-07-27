<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4" dark app>
      <v-toolbar-title>Yeats<span v-if='user'> | <small>{{ user }}</small></span></v-toolbar-title>
      <v-spacer />
      <v-btn v-if="loggedIn" @click="logOut()" color="red">Log Out<v-icon right>mdi-lock</v-icon></v-btn>
      <v-btn v-else @click="googleSignIn()" color="green">Log In<v-icon right>mdi-lock-open</v-icon></v-btn>
      <!-- <v-dialog width="500">
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" icon><v-icon>mdi-lock</v-icon></v-btn>
        </template>

        <v-card class="elevation-12">
          <v-toolbar
            color="primary"
            dark
            flat>
            <v-toolbar-title>Login form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Login"
                name="login"
                prepend-icon="mdi-person"
                type="text"
              />
              <v-text-field
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog> -->
    </v-app-bar>

  </div>
</template>

<script>
import { firebaseCore, auth } from '@/firebase'
export default {
  name: 'NavBar',
  data: () => ({
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
        return
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
    },
    getLoggedInUserDetails () {
      // auth.onAuthStateChanged(user => {
      //   if (user) {
      //     this.loggedIn = true
      //     // User is signed in.
      //     var displayName = user.displayName
      //     var email = user.email
      //     // var emailVerified = user.emailVerified
      //     // var photoURL = user.photoURL
      //     // var isAnonymous = user.isAnonymous
      //     // var uid = user.uid
      //     // var providerData = user.providerData
      //     console.log(displayName, email)
      //   } else {
      //     this.loggedIn = false
      //   }
      // })
    }
  }
}
</script>
