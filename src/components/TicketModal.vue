<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12 md10 offset-md1>
        <v-dialog
          v-model="ticketModalState"
          width="500">
          <template v-slot:activator="{ on }">
            <v-btn
              v-on="on"
              id="makeDonationBtn"
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
                <div>
                  <h2 class="subheader">What is your address?</h2>
                  <gmap-autocomplete
                    @place_changed="setPlace" />
                  <br>
                </div>

                <v-text-field
                  label="Name"
                  v-model="name"
                />
                <v-text-field
                  label="Phone Number"
                  v-model="phone"
                />

                <v-select
                  label="Weight (kg)"
                  v-model="amountSelect"
                  :items="items"
                />
                <v-select
                  label="Type"
                  v-model="donationType"
                  :items="donationTypes"
                />

                <h2 class="subheader">
                  What type of
                  <span v-if="donationType === 'Clothing'">clothing</span>
                  <span v-if="donationType === 'Food'">food</span>
                  <span v-if="donationType === 'Toys'">toys</span>
                  do you wish to donate?
                </h2>
                <v-chip-group
                  v-if="donationType === 'Food'"
                  v-model="selected"
                  column
                  multiple
                >
                  <v-chip v-for="type in foodTypes" :key="type" filter outlined>{{ type }}</v-chip>
                </v-chip-group>
                <v-chip-group
                  v-if="donationType === 'Clothing'"
                  v-model="selected"
                  column
                  multiple
                >
                  <v-chip v-for="type in clothingTypes" :key="type" filter outlined>{{ type }}</v-chip>
                </v-chip-group>
                <v-chip-group
                  v-if="donationType === 'Toys'"
                  v-model="selected"
                  column
                  multiple
                >
                  <v-chip v-for="type in toyTypes" :key="type" filter outlined>{{ type }}</v-chip>
                </v-chip-group>

                <h2 class="subheader">
                  When do you want the
                  <span v-if="donationType === 'Clothing'">clothing</span>
                  <span v-if="donationType === 'Food'">food</span>
                  <span v-if="donationType === 'Toys'">toys</span>
                  to be collected?
                </h2>
                <v-time-picker
                  v-model="picker"
                  class="mt-2"
                  :landscape="true"
                  :ampm-in-title="true"
                />
              </form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn @click="onSubmit" color="primary">submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { submitDonation } from '@/firebase'
export default {
  name: 'TicketModal',
  data: () => ({
    center: { lat: 45.508, lng: -73.587 },
    markers: [],
    name: null,
    phone: null,
    places: [],
    currentPlace: null,
    donationType: null,
    donationTypes: ['Food', 'Clothing', 'Toys'],
    picker: null,
    ticketModalState: false,
    selected: [],
    amountSelect: null,
    items: ['0-5kgs', '5-10kgs', '10-20kgs', '20-30kgs', '30kgs+'],
    foodTypes: ['Meat', 'Fish', 'Chilled Products', 'Bakery', 'Fruit / Veg', 'Dry Stock', 'Other'],
    clothingTypes: ['Coats', 'Jackets', 'Trousers', 'Jeans', 'Suits', 'Skirts', 'T-shirts', 'Sweater'],
    toyTypes: ['Dolls', 'Stuffed toys', 'Puzzles']
  }),
  computed: {
    isRefrigerated() {
      const needsRefrigeration = {
        Meat: true,
        Fish: true,
        'Chilled Products': true
      }
      const items = this.donationType === 'Food' ? this.selected.map(curr => this.foodTypes[curr]) : this.donationType === 'Toys' ? this.selected.map(curr => this.toyTypes[curr]) : this.selected.map(curr => this.clothingTypes[curr])

      for (let item of items) {
        if (item in needsRefrigeration) {
          return true
        }
      }

      return false
    }
  },
  methods: {
    onSubmit: async function() {
      try {
        const response = await submitDonation({
          type: this.donationType,
          items: this.donationType === 'Food' ? this.selected.map(curr => this.foodTypes[curr]) : this.donationType === 'Toys' ? this.selected.map(curr => this.toyTypes[curr]) : this.selected.map(curr => this.clothingTypes[curr]),
          pickupTime: this.picker,
          refrigerated: this.isRefrigerated,
          status: 'awaiting',
          totalWeight: this.amountSelect,
          chef: {
            name: this.name,
            phone: this.phone,
            address: {
              lat: this.currentPlace.geometry.location.lat(),
              lng: this.currentPlace.geometry.location.lng()
            }
          },
          driver: {

          },
          createdAt: String(new Date().getTime())
        })
        console.log('Doc:', response)
        window.location.reload()
      } catch (error) {
        console.log(error)
        console.log('ERROR is submitDonation')
      }
    },
    setPlace(place) {
      this.currentPlace = place
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        }
        this.markers.push({ position: marker })
        this.places.push(this.currentPlace)
        this.center = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        }
        this.currentPlace = null
      }
    },
  }
}
</script>
<style>
.subheader {
  margin-top: 20px;
  margin-bottom: 10px;
}
#makeDonationBtn {
  display: block;
  margin-left: auto;
}
</style>
