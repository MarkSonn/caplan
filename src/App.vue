<template>
  <v-app>

    <NavBar />

    <v-content>
<<<<<<< HEAD
      <router-view />
      <!-- <ShitsFucked /> -->
      <!-- TestComponent -->
=======
      <LandingPage/>
>>>>>>> origin/master-matt
    </v-content>
  </v-app>
</template>

<script>
import * as pages from '@/pages' // @ means from the src directory
import * as components from '@/components' // @ means from the src directory

export default {
  name: 'App',
  components: { ...pages, ...components }
}
</script>
