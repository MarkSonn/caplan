<template>
  <form style="width: 60%; margin: auto;">
    <h2>Contact us</h2>
    <v-text-field
      v-model="name"
      label="Name"
      required>
      </v-text-field>
    <v-text-field
      v-model="email"
      label="E-mail"
      required>
    </v-text-field>
    <v-textarea
      v-model="message"
      name="contactMessage"
      label="Message"
      required>
    </v-textarea>

    <v-btn class="mr-4" @click="onSubmit">submit</v-btn>
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
    onSubmit: function () {
      console.log(this.name, this.email, this.message)
    }
  }
}
</script>
