<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12 md10 offset-md1>


        <!-- <h2>Your past donation history</h2>
        <v-simple-table>
          <thead>
            <tr>
              <th class="text-left">Type</th>
              <th class="text-left">Items</th>
              <th class="text-left">Pick-up time (24h)</th>
              <th class="text-left">Total weight</th>
              <th class="text-left">Chef</th>
              <th class="text-left">Refrigerated</th>
              <th class="text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in history" :key="item.id">
              <td>
                {{ item.type }}
              </td>
              <td>
                <v-chip
                  v-for="type in item.items"
                  :key="type"
                  class="chip"
                  filter
                  outlined>
                  {{ type }}
                </v-chip>
              </td>
              <td>
                {{ item.pickupTime }}
              </td>
              <td>
                {{ item.totalWeight }}
              </td>
              <td>
                {{ item.chef.name }}
              </td>
              <td>
                {{ item.refrigerated ? 'Yes' : 'No' }}
              </td>
              <td>
                {{ item.status === 'awaiting' ? 'Awaiting' : 'Completed' }}
              </td>
            </tr>
          </tbody>
        </v-simple-table> -->
        <v-card>
          <v-card-title>
            Yeat history
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            v-if="this.history !== null"
            :headers="headers"
            :items="transformedHistory"
            :search="search"
          ></v-data-table>
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
    keys: ['type', 'items', 'pickupTime', 'totalWeight', 'chef', 'driver', 'refrigerated', 'status'],
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
      this.history = res.filter((curr, i) => {
        for (let k of this.keys) {
          if (!curr.hasOwnProperty(k)) {
            return false
          }
          curr = { ...curr, id: i }
        }
        return true
      })
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
