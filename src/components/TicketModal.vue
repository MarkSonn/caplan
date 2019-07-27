<template>
  <v-dialog
    v-model="ticketModalState"
    width="500">
    <template v-slot:activator="{ on }">
      <v-btn
        v-on="on"
        color="red lighten-2"
        dark>
        Make a donation
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="headline primary white--text" primary-title>
        Submit a donation
      </v-card-title>

      <v-card-text>
        <form>
          <h2 class="title md-2">What type of food do you wish to donate?</h2>

          <v-chip-group
            v-model="selected"
            column
            multiple
          >
            <v-chip v-for="type in foodTypes" :key="type" filter outlined>{{ type }}</v-chip>
          </v-chip-group>

          <h2>When do you want the food to be collected?</h2>
          <v-time-picker
            v-model="picker"
            class="mt-2"
            :landscape="true"
            :ampm-in-title="true"
          />

          <h2 class="title md-2">How much food are you donating?</h2>
          <v-select
            v-model="amountSelect"
            :items="items"
          />
        </form>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="onSubmit" color="primary">submit</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { submitDonation } from '@/firebase'
export default {
  name: 'TicketModal',
  data: () => ({
    picker: null,
    ticketModalState: false,
    selected: [],
    amountSelect: null,
    items: ['0-5kgs', '5-10kgs', '10-20kgs', '20-30kgs', '30kgs+'],
    foodTypes: ['Meat', 'Fish', 'Chilled Products', 'Bakery', 'Fruit / Veg', 'Dry Stock', 'Other']
  }),
  methods: {
    onSubmit: async function() {
      // console.log(this.selected.map(curr => this.foodTypes[curr]))
      // console.log(this.picker)
      // console.log(this.amountSelect)
      try {
        const response = await submitDonation({ 
          foodTypes: this.selected.map(curr => this.foodTypes[curr]), 
          pickupTime: this.picker,
          foodAmount: this.amountSelect 
        })
        console.log('Doc:', response)
      } catch (error) {
        console.log('ERROR is submitDonation')
      }
    }
  }
}
</script>
