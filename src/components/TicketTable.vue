<template>
  <v-simple-table>
    <thead>
      <tr>
        <th class="text-left">Name</th>
        <th class="text-left">Calories</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in history" :key="item.id">
        <v-chip-group
          column
        >
          <v-chip v-for="type in item.foodTypes" :key="type" filter outlined>{{ type }}</v-chip>
        </v-chip-group>
        <!-- <td>{{ item.foodTypes }}</td>
        <td>{{ item.pickupTime }}</td> -->
      </tr>
    </tbody>
  </v-simple-table>
</template>

<script>
import * as components from '@/components'

export default {
  name: 'TicketTable',
  data: () => ({
    history: [
      {
        id: 0,
        foodTypes: ["Meat", "Fish"],
        pickupTime: "1:30",
        foodAmount: "0-10kg"
      },
      {
        id: 1,
        foodTypes: ["Bakery", "Chilled Products"],
        pickupTime: "14:00",
        foodAmount: "0-10kg"
      },
      {
        id: 2,
        foodTypes: ["Fruit / Veg", "Dry Stock"],
        pickupTime: "15:45",
        foodAmount: "10-20kg"
      }
    ]
  })
}
</script>