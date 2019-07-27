<template>
  <v-app>

    <NavBar />

    <v-content>
      <ContactForm/>
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
