<!--
  Landing page : handle the main page that users first see
  should have hero, link to map, some info, and contact form
  - matt
 -->

<template>
  <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <v-layout
      align-center
      column
      justify-center
    >
      <h1 class="display-2 font-weight-thin mb-4">Shit's Fucked</h1>
      <h4 class="subheading">Sometimes shit is just royally fucked.</h4>
    </v-layout>
  </v-parallax>
</template>

<script>
export default {
  name: 'LandingPage',
  data: () => ({
  }),
  methods: {
  }
}
</script>

<style scoped>
</style>
