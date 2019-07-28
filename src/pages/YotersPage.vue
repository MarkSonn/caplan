<template>
  <div>
    <Map />
    <v-btn
      @click="searchBarLaunch"
      fab
      large
      dark
      bottom
      right
      absolute
      color="blue"
      class="v-btn--example"
      style="top:20px;">
      <v-icon>mdi-check</v-icon>
    </v-btn>
    <!-- <MapStuffHere /> -->
    <!-- <ContactForm /> -->
  </div>
</template>

<script>
import * as components from '@/components'
import { setCompleted } from '@/firebase'
export default {
  name: 'YotersPage',
  components: { ...components },
  methods: {
    searchBarLaunch() {
      const response = prompt('Please enter the ID')
      try {
        this.setCompleted(response)
      } catch (error) {
        console.log('RIP', error)
      }
    }
  }
}
</script>
