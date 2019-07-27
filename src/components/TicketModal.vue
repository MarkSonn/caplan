<template>
  <v-dialog
      v-model="ticketModalState"
      width="500">
    <template v-slot:activator="{ on }">
      <v-btn
        color="red lighten-2"
        dark
        v-on="on">
        Click Me
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="headline primary white--text" primary-title>
        Submit Ticket
      </v-card-title>

      <v-card-text>
        <form>
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
        </form>
      </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="onSubmit">submit</v-btn>
    </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'TicketModal',
  data: () => ({
    ticketModalState: false,
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
