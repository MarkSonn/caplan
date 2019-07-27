<template>
  <div>
    <v-parallax
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
        <v-layout
          align-center
          column
          justify-center>
          <h1 class="display-2 font-weight-thin mb-4">Yeats</h1>
          <h4 class="subheading">First you eat it, then you yeat it!</h4>
        </v-layout>
      </v-parallax>
  </div>
</template>

<script>
export default {
  name: 'ParallaxHero',
  data: () => ({
  }),
  computed: {
  },
  methods: {
  }
}
</script>
