<template>
  <div v-scroll="rotateArm">
    <v-parallax
        dark
        height="1000px"
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
        <v-layout
          align-center
          column
          justify-center
          style="margin-top: 200px; margin-bottom: 200px"
          >
          <h1 class="display-4 font-weight-thin mb-4">Yeats</h1>
          <h4 class="headline">First you eat it, then you Yeat it!</h4>
        </v-layout>
        <v-layout>
          <v-flex xs6>
            <h2 class="display-1 my-6 mx-2">Just Yeat it!</h2>
            <p>Ever felt bad for throwing out excess food? Why chuck it when you could Yeat it? Yeat connects you with local homeless shelters, something something. Just let us know whenever you have excess food, and one of our Yeat drivers will come pick it up for you.  </p>
            <p>Interested in helping out? Something something drive some more.</p>
          </v-flex>
          <v-flex xs6>
            <div id="yeater" style="position: relative" width="400px">
              <img id="yeatbod" src="yeater_bod.svg" width="400px"/>
              <img id="yeatarm"
                src="yeater_arm.svg"
                width="256px"
                style="transform: rotate(40deg)"/>
            </div>
          </v-flex>
        </v-layout>
      </v-parallax>
  </div>
</template>

<script>
export default {
  name: 'ParallaxHero',
  data: () => ({
  }),
  computed: {
  },
  methods: {
    rotateArm(e) {
      function mapval(x, srclow, srchi, dstlow, dsthi) {
        var f = (x - srclow) / (srchi - srclow)
        if (f < 0) f = 0;
        else if (f > 1) f = 1;
        return dstlow + f * (dsthi - dstlow)
      }
      var pageY = window.scrollY
      console.log(pageY)
      var el = document.getElementById('yeatarm')
      //var angle = (300 *0.5) - pageY * 0.5
      // map [220,400] to [40,-50]
      // rotation range: 40 to -50
      //if (angle < -50) angle = -50;
      //if (angle > 40) angle = 40;
      var angle = mapval(pageY, 220, 400, 40, -50)
      el.style = "transform: rotate(" + angle + "deg)"
    }
  }
}
</script>

<style scoped>
  #yeatbod {
    position: relative;
    top: 0;
    left: 0;
    z-index: 100;
  }
  #yeatarm {
    position: absolute;
    top: 0;
    left: 80px;

  }
</style>