<template>
  <!-- <div class="app"> -->
  <!-- <div ref="map" /> -->
  <div id="mainMap" class="google-map" />
  <!-- </div> -->
</template>

<script>
// import { query } from '../firebase.js'
import { getDonations } from '../firebase.js'
import { deleteDonation } from "../firebase.js"
let google = window.google
export default {
  name: 'Map',
  data: () => ({
    userLoc: {
      lat: -33.9040464,
      long: 151.2207742
    },
    markerCoordinates: [
      {
        lat: -33.9040464,
        long: 151.2207742
      }],
    //      {
    //        lat: -33.9140464,
    //        long: 151.2207742
    //      },
    //      {
    //        lat: -33.9140464,
    //        long: 151.2307742
    //      },
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
    const ourLat = this.userLoc.lat
    const ourLong = this.userLoc.long
    const options = {
      zoom: 15,
      center: new google.maps.LatLng(ourLat, ourLong)
    }
    console.log('options: ', options)
    
    const element = document.getElementById('mainMap')
    console.log(element, options)
    this.map = new google.maps.Map(element, options)
    console.log('map:', this.map)
    let coord = this.userLoc
    const position = new google.maps.LatLng(coord.lat, coord.long)
    const marker = new google.maps.Marker({ 
      position,
      map: this.map,
      title: 'Yeats',
      animation: google.maps.Animation.BOUNCE
    })
    var content = 'Your Current Location'
    var infowindow = new google.maps.InfoWindow()
    let map = this.map
    google.maps.event.addListener(marker, 'click', (function(marker, content, infowindow) {
      map.setCenter(marker.getPosition())
      return function() {
        infowindow.setContent(content)
        infowindow.open(map, marker)
      }
    })(marker, content, infowindow))
    this.markers.push(marker)
    this.map.fitBounds(this.bounds.extend(position))
  },
  beforeMount() {
    const locations = getDonations().then(res => {
      console.log(res)
      res.forEach((obj) => {
        const position = new google.maps.LatLng(obj.chef.address.lat, obj.chef.address.lng)
        let marker = ''
        switch (obj.type) {
          case 'Food':
            marker = new google.maps.Marker({
              position,
              map: this.map,
              title: obj.items.join(', '),
              icon: require('../assets/yeaty_icon_food.png?raw=true')
            })
            break
          case 'Toys':
            marker = new google.maps.Marker({
              position,
              map: this.map,
              title: obj.items.join(', '),
              icon: require('../assets/yeaty_icon_toy.png?raw=true')
            })
            break
          case 'Clothing':
            marker = new google.maps.Marker({
              position,
              map: this.map,
              title: obj.items.join(', '),
              icon: require('../assets/yeaty_icon_shirt.png?raw=true')
            })
            break
        }
        let refrigerated = obj.refrigerated ? 'Chilled' : ''
        var content = '' + obj.chef.name + ': ' + refrigerated + ' ' + obj.type + ' (' + obj.totalWeight + ')<br>Preferred Pickup: ' + obj.pickupTime + `<br/><button onclick="console.log('${obj.id}')">Confirm pickup</button>`
        var infowindow = new google.maps.InfoWindow()
        let map = this.map
        google.maps.event.addListener(marker, 'click', (function(marker, content, infowindow, id) {
          map.setCenter(marker.getPosition())
          return function() {
            infowindow.setContent(content)
            infowindow.open(map, marker)
          }
        })(marker, content, infowindow, obj.id))
        this.markers.push(marker)
        marker.setMap(this.map)
        this.map.fitBounds(this.bounds.extend(position))
      })
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
