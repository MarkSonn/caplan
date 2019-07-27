<template>
  <v-app>

    <NavBar />

    <v-content>
      <LandingPage/>
    </v-content>
  </v-app>
</template>

<script>
import * as components from '@/components/' // @ means from the src directory

export default {
  name: 'App',
  components: { ...components }
}
</script>
