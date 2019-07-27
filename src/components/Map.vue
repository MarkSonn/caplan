<template>
    <div class="app">
        <!-- <div ref="map" style="width: 100%; height: 600px;"></div> -->
        <div class="google-map" :id="mapName"></div>
    </div>
</template>

<script>
export default {
  name: 'google-map',
  props: ['name'],
  data: function () {
    
    let lat;
    let long;
    // returning lat and long late - wrap a promise around?
    navigator.geolocation.getCurrentPosition(function(position) {
      lat = position.coords.latitude
      long = position.coords.longitude;
      console.log(lat, long);
    });
    
    //console.log(lat, long);

    return {
      mapName: this.name + "-map",
      markerCoordinates: [{
        latitude: -33.8688,
        longitude: 151.2093
      }],
      map: null,
      bounds: null,
      markers: []
    }
  },
  mounted: function () {
    this.bounds = new google.maps.LatLngBounds();
    const element = document.getElementById(this.mapName)
    const mapCentre = this.markerCoordinates[0]
    const options = {
      center: new google.maps.LatLng(mapCentre.latitude, mapCentre.longitude)
    }
    this.map = new google.maps.Map(element, options);
    this.markerCoordinates.forEach((coord) => {
      const position = new google.maps.LatLng(coord.latitude, coord.longitude);
      const marker = new google.maps.Marker({ 
        position,
        map: this.map
      });
    this.markers.push(marker)
      this.map.fitBounds(this.bounds.extend(position))
    });
  }
};
</script>
<style scoped>
.google-map {
  width: 99vw;
  height: 89vh;
  margin: 0 auto;
  background: gray;
}
</style>