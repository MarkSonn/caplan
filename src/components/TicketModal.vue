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
          <h2 class="title md-2">What type of food do you wish to donate?</h2>

          <v-chip-group
            v-model="selected"
            column
            multiple
          >
            <v-chip v-for="type in foodTypes" v-bind:key="type" filter outlined>{{ type }}</v-chip>
          </v-chip-group>

          <h2>When do you want the food to be collected?</h2>
          <v-time-picker
            v-model="picker"
            class="mt-2"
            :landscape="true"
            :ampm-in-title="true"
          ></v-time-picker>

          <h2 class="title md-2">How much food are you donating?</h2>
          <v-select
            v-model="amountSelect"
            :items="items"
          ></v-select>
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
    picker: null,
    ticketModalState: false,
    selected: [],
    amountSelect: null,
    items: ["0-10kgs", "10-20kgs", "20-50kgs", "50-100kgs", "100kgs+"],
    foodTypes: ["Meat", "Fish", "Chilled Products", "Bakery", "Fruit / Veg", "Dry Stock", "Other"]
  }),
  methods: {
    onSubmit: function () {
      console.log(this.selected, this.picker, this.amountSelect)
    }
  }
}
</script>
