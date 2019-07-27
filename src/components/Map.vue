<template>
    <div class="app">
        <div ref="map" style="width: 100%; height: 600px;"></div>
    </div>
</template>

<script>
var H = window.H

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

    this.lat = 0
    this.lng = 0

    if (navigator.geolocation) {
      let lft = 0
      let lmg = 0
      navigator.geolocation.getCurrentPosition(function (callback) {
        lft = callback.coords.latitude
        lmg = callback.coords.longitude
      })
      this.lat = lft
      this.lng = lmg
    } else {
      alert('Unable to obtain user location (Geolocation not supported)')
    }

    // Instantiate (and display) a map object:
    this.inst = new H.Map(
      this.$refs.map,
      layers.vector.normal.map,
      {
        zoom: 10,
        center: { lng: this.lng, lat: this.lat }
      })

    /*window.addEventListener('resize', () => this.$refs.map.getViewPort().resize())
    /*var mapEvents = new H.mapevents.MapEvents(this.inst)
    var behavior = new H.mapevents.Behavior(mapEvents)
    var ui = H.ui.UI.createDefault(this.inst, layers)*/
  }
}
</script>
