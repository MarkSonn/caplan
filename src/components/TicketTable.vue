<template>
  <div>
    <h2>Your past donation history</h2>
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
    </v-simple-table>
  </div>
</template>

<script>
import { getDonations } from '@/firebase'

export default {
  name: 'TicketTable',
  data: () => ({
    keys: ['type', 'items', 'pickupTime', 'totalWeight', 'chef', 'driver', 'refrigerated', 'status'],
    history: null
  }),
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
