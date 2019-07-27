<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12 md6 offset-md3>
        <v-card>
          <v-card-title><h2>Contact us</h2></v-card-title>
          <v-card-text>
            <v-text-field
              v-model="enquiry.name"
              label="Name"
              required
            />
            <v-text-field
              v-model="enquiry.email"
              label="E-mail"
              required
            />
            <v-textarea
              v-model="enquiry.message"
              name="contactMessage"
              label="Message"
              required
            />
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn @click="onSubmit" class="mr-4" color="primary">submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { submitEnquiry } from '@/firebase'
export default {
  name: 'ContactForm',
  data: () => ({
    enquiry: {}
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
    async onSubmit() {
      try {
        const response = await submitEnquiry(this.enquiry)
        console.log('Enquiry response', response)
        this.enquiry = {}
      } catch (error) {
        console.log('Enquiry error', error)
        return
      }
    }
  }
}
</script>
