<template>
  <!-- <div class="app"> -->
    <!-- <div ref="map" /> -->
  <div id="mainMap" class="google-map" />
  <!-- </div> -->
</template>

<script>
//import { query } from '../firebase.js'
let google = window.google
export default {
  name: 'Map',
  data: () => ({
    markerCoordinates: [
      {
        lat: -33.9040464,
        long: 151.2207742
      },
      {
        lat: -33.9140464,
        long: 151.2207742
      },
      {
        lat: -33.9140464,
        long: 151.2307742
      },
      
    ],
    map: null,
    bounds: null,
    markers: []
  }),
  // let results = []
  //   /*let sub = query.onSnapshot((snapshot) => {
  //     snapshot.docChanges().forEach((change) => {
  //       if (change.type === 'added' || change.type === 'modified') {
  //         console.log(change)
  //       }
  //     })
  //   })*/
  mounted: function () {
    this.bounds = new google.maps.LatLngBounds()
    console.log('bounds:', this.bounds)
    const ourLat = this.markerCoordinates[0].lat
    const ourLong = this.markerCoordinates[0].long
    const options = {
      zoom: 15,
      center: new google.maps.LatLng(ourLat, ourLong)
    }
    console.log('options: ', options)
    
    const element = document.getElementById('mainMap')
    console.log(element, options)
    this.map = new google.maps.Map(element, options)
    console.log('map:', this.map)
    this.markerCoordinates.forEach(coord => {
      const position = new google.maps.LatLng(coord.lat, coord.long)
      const marker = new google.maps.Marker({ 
        position,
        map: this.map
      })
      this.markers.push(marker)
      this.map.fitBounds(this.bounds.extend(position))
    })
  }
}
</script>

<style scoped>
.google-map {
  width: 100vw;
  height: calc(100vh - 64px);
  margin: 0 auto;
  background: gray;
}
</style>
