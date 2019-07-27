<template>
  <div>
    <h2>Your past donation history</h2>
    <v-simple-table>
      <thead>
        <tr>
          <th class="text-left">Food types</th>
          <th class="text-left">Pick-up time (24h)</th>
          <th class="text-left">Food amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in history" :key="item.id">
          <td>
            <v-chip 
              v-for="type in item.foodTypes"
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
            {{ item.foodAmount }}
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
    keys: ['foodTypes', 'pickupTime', 'foodAmount'],
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
