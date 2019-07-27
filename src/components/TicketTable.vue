<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12 md10 offset-md1>
        <v-card>
          <v-card-title>
            Yeat history
            <v-spacer />
            <v-text-field
              v-model="search"
              label="Search"
              single-line
              hide-details
            />
          </v-card-title>
          <v-data-table
            v-if="this.history !== null"
            :headers="headers"
            :items="transformedHistory"
            :search="search"
          />
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { getDonations } from '@/firebase'

export default {
  name: 'TicketTable',
  data: () => ({
    keys: ['type', 'items', 'pickupTime', 'totalWeight', 'chef', 'driver', 'refrigerated', 'status', 'createdAt'],
    history: null,
    search: '',
    headers: [
      {
        text: 'Type',
        align: 'left',
        sortable: true,
        value: 'type',
      },
      { text: 'Items', value: 'items', sortable: false },
      { text: 'Pick-up time', value: 'pickupTime', sortable: true },
      { text: 'Total weight', value: 'totalWeight', sortable: true },
      { text: 'Chef', value: 'chef.name', sortable: true },
      { text: 'Refrigerated', value: 'refrigerated', sortable: true },
      { text: 'Status', value: 'status', sortable: true }
    ],
  }),
  computed: {
    transformedHistory() {
      const history = [...this.history]

      for (let h of history) {
        h.items = h.items.join(', ')
        h.refrigerated = h.refrigerated ? 'Yes' : 'No'
        h.status = h.status === 'awaiting' ? 'Awaiting' : 'Completed'
      }
      return history
    }
  },
  beforeMount() {
    getDonations().then(res => {
      const history = res.filter((curr, i) => {
        for (let k of this.keys) {
          if (!curr.hasOwnProperty(k)) {
            return false
          }
          curr = { ...curr, id: i }
        }
        return true
      })
      history.sort((a, b) => (
        -(a.createdAt - b.createdAt)
      ))
      this.history = history
    })
  }
}
</script>
<style scoped>
  .chip {
    margin-left: 5px;
    margin-right: 5px;
  }
</style>
