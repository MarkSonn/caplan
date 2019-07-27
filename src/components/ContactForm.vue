<template>
  <form style="width: 60%; margin: auto;">
    <h2>Contact us</h2>
    <v-text-field
      label="Name"
      required
      @input="onNameInput"
    ></v-text-field>
    <v-text-field
      label="E-mail"
      required
      @input="onEmailInput"
    ></v-text-field>
    <v-textarea
      name="contactMessage"
      label="Message"
      @input="onMessageInput"
      required
    ></v-textarea>

    <v-btn class="mr-4" @click="onSubmit">submit</v-btn>
  </form>
</template>

<script>
export default {
  name: 'ContactForm',
  data: () => ({
    email: "",
    message: "",
    name: ""
  }),
  methods: {
    onNameInput: function(e) {
      this.name = e
    },
    onEmailInput: function(e) {
      this.email = e
    },
    onMessageInput: function(e) {
      this.message = e
    },
    onSubmit: function() {
      console.log(this.name, this.email, this.message)
    }
  }
}
</script>

<style scoped>
</style>
