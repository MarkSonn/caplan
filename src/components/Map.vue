<template>
    <div class="app">
        <div ref="map" style="width: 100%; height: 600px;"></div>
    </div>
</template>

<script>
var H = window.H
let lng = 0
let lat = 0
let obj = 0
let inst = 0

export default {
  name: 'Map',
  data: function () {
    return {
      platform: {},
      map: {}
    }
  },
  mounted: function () {
    this.platform = new H.service.Platform({
      'apikey': 'nHMiL5tvhEf51aXUBVbHozLuFcb5vZritl7W4bdaQ58'
    })

    // Obtain the default map types from the platform object
    var layers = this.platform.createDefaultLayers()

    obj = this.$refs.map

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (callback) {
        lat = callback.coords.latitude
        lng = callback.coords.longitude
        console.log(lat, lng)
        obj.innerHTML = ''
        inst = new H.Map(
          obj,
          layers.vector.normal.map,
          {
            zoom: Math.floor(callback.coords.accuracy / 5),
            center: { lng: lng, lat: lat }
          })
      })
    } else {
      alert('Unable to obtain user location (Geolocation not supported)')
    }

    // Instantiate (and display) a map object:
    if (lat == 0) {
      inst = new H.Map(
        this.$refs.map,
        layers.vector.normal.map,
        {
          zoom: 10,
          center: { lng: lng, lat: lat }
        })
    }

    // window.addEventListener('resize', () => this.$refs.map.getViewPort().resize())
    var mapEvents = new H.mapevents.MapEvents(this.inst)
    var behavior = new H.mapevents.Behavior(mapEvents)
    var ui = H.ui.UI.createDefault(inst, layers)
  }
}

</script>
