<template>
  <form style="width: 60%; margin: auto;">
    <h2>Contact us</h2>
    <v-text-field
      v-model="name"
      label="Name"
      required />
    <v-text-field
      v-model="email"
      label="E-mail"
      required />
    <v-textarea
      v-model="message"
      name="contactMessage"
      label="Message"
      required />

    <v-btn @click="onSubmit" class="mr-4">submit</v-btn>
  </form>
</template>

<script>
export default {
  name: 'ContactForm',
  data: () => ({
    email: '',
    message: '',
    name: ''
  }),
  methods: {
    onNameInput: function (e) {
      this.name = e
    },
    onEmailInput: function (e) {
      this.email = e
    },
    onMessageInput: function (e) {
      this.message = e
    },
    onSubmit: function () {
      console.log(this.name, this.email, this.message)
    }
  }
}
</script>
