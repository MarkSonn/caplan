<template>
  <div>
    <v-card max-width="344" class="mx-auto">
      <v-card-title>{{ title }}</v-card-title>
      <v-card-text>{{ text }}</v-card-text>
      <v-card-actions>
        <v-btn @click="launchModal" text>Click</v-btn>
      </v-card-actions>
    </v-card>

    <v-dialog v-model="modalState" width="500">
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title>
          Privacy Policy
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="modalState = false">
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'ParallaxHero',
  data: () => ({
    title: 'lolxdxd',
    text: 'rip hehe',
    modalState: false,
    arr: [1, 2, 3, 4]
  }),
  computed: {
    specialArr() {
      return this.arr.map(x => x ** 2)
    }
  },
  methods: {
    launchModal() {
      this.otherFunction(true)
    },
    otherFunction (newState) {
      this.modalState = newState
    }
  }
}
</script>
