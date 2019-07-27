<template>
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
          class="chip"
          v-for="type in item.foodTypes" 
          :key="type" 
          filter 
          outlined>{{ type }}</v-chip>
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
</template>

<script>
import { getDonations } from '@/firebase'

export default {
  name: 'TicketTable',
  data: () => ({
    keys: ["id", "foodTypes", "pickupTime", "foodAmount"],
    // history: getDonations().filter(curr => {
    //   for (let k of keys) {
    //     if (!this.keys.includes(k)) 
    //       return false
    //   }
    //   return true
    // })
    // history: getDonations().filter(curr => {
    //   console.log(curr)
    //   return false
    // })
    // history: [
    //   {
    //     id: 0,
    //     foodTypes: ["Meat", "Fish"],
    //     pickupTime: "1:30",
    //     foodAmount: "0-10kg"
    //   },
    //   {
    //     id: 1,
    //     foodTypes: ["Bakery", "Chilled Products"],
    //     pickupTime: "14:00",
    //     foodAmount: "0-10kg"
    //   },
    //   {
    //     id: 2,
    //     foodTypes: ["Fruit / Veg", "Dry Stock"],
    //     pickupTime: "15:45",
    //     foodAmount: "10-20kg"
    //   }
    // ]
  })
}
</script>
<style scoped>
  .chip {
    margin-left: 5px;
    margin-right: 5px;
  }
</style>
