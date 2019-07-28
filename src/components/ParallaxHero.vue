<template>
  <div v-scroll="rotateArm">
    <v-parallax
      dark
      style="height: 1200px; margin-top: -100px"
      src="heroback.jpg">
      <v-layout
        align-center
        column
        justify-center
        style="margin-top: 300px; margin-bottom: 200px;"
      >
        <h1 class="display-4 font-weight-thin mb-4">Yeats</h1>
        <h4 class="display-1 font-weight-thin">What you don't need, you Yeat.</h4>
      </v-layout>
      <v-layout>
        <v-flex xs6 pa-5 font-weight-light>
          <h2 class="display-2 my-5 font-weight-light">Just Yeat it!</h2>
          <p>
            Leftovers from last night's family dinner? Clothes in your wardrobe you never wear? Old toys just lying and collecting dust? Why chuck 'em when you could Yeat 'em? Yeats makes donating food, clothes and toys simple and convenient. Your donations will go to homeless shelters, charity op-shops and other people who can benefit most from your stuff. Just let us know, and one of our awesome volunteers will come to you and pick them up!
          </p>
        </v-flex>
        <v-flex xs6>
          <div id="yeater" style="position: relative" width="400px">
            <img id="yeatbod" src="yeater_bod.svg" width="400px">
            <img id="yeatarm"
                 src="yeater_arm.svg"
                 width="256px"
                 style="transform: rotate(40deg)">
            <img id="yeatfood3" class="yeatfood"
                 src="yeater_food_3.svg"
                 width="256px"
                 style="transform: rotate(40deg)">
            <img id="yeatfood2a" class="yeatfood"
                 src="yeater_food_2a.svg"
                 width="256px"
                 style="transform: rotate(40deg)">
            <img id="yeatfood2" class="yeatfood"
                 src="yeater_food_2b.svg"
                 width="256px"
                 style="transform: rotate(40deg)">
            <img id="yeatfood2c" class="yeatfood"
                 src="yeater_food_2c.svg"
                 width="256px"
                 style="transform: rotate(40deg)">
            <img id="yeatfood1" class="yeatfood"
                 src="yeater_food_1.svg"
                 width="256px"
                 style="transform: rotate(40deg)">
          </div>
        </v-flex>
      </v-layout>
    </v-parallax>
    <v-layout dark align-center column justify-center style="background: #000; padding-bottom: 100px; padding-top: 60px">
      <p class="display-1" style="color: white">Contact Us</p>
      <form style="width: 60%; margin: auto;">
        <v-text-field v-model="enquiry.name"
                      dark
                      label="Name"
                      required />
        <v-text-field v-model="enquiry.email"
                      dark
                      label="E-mail"
                      required />
        <v-textarea v-model="enquiry.message"
                    dark
                    name="contactMessage"
                    label="Message"
                    required />

        <v-btn @click="onSubmit" dark class="mr-4">submit</v-btn>
      </form>
    </v-layout>
  </div>
</template>

<script>
import * as components from '@/components'
import { submitEnquiry } from '@/firebase'
export default {
  name: 'ParallaxHero',
  data: () => ({
    enquiry: {}
  }),
  computed: {
  },
  methods: {
    rotateArm(e) {
      function mapval(x, srclow, srchi, dstlow, dsthi) {
        var f = (x - srclow) / (srchi - srclow)
        if (f < 0) f = 0
        else if (f > 1) f = 1
        return dstlow + f * (dsthi - dstlow)
      }
      var pageY = window.scrollY
      var arm = document.getElementById('yeatarm')
      // var angle = (300 *0.5) - pageY * 0.5
      // map [220,400] to [40,-50]
      // rotation range: 40 to -50
      // if (angle < -50) angle = -50;
      // if (angle > 40) angle = 40;
      const yetime = 300
      var angle = mapval(pageY, 0, yetime, 40, -50)
      var tx = mapval(pageY, 0, yetime, 150, 0)
      var ty = mapval(pageY, 0, yetime, 50, 0)
      if (pageY > yetime) {
        tx = mapval(pageY, yetime, 1200, 0, -100)
        ty = mapval(pageY, yetime, 1200, 0, -33)
      }
      arm.style = 'transform: translate(' + tx + 'px, ' + ty + 'px) rotate(' + angle + 'deg)'
      var body = document.getElementById('yeatbod')
      body.style = 'transform: translate(' + tx + 'px, ' + ty + 'px)'
      if (pageY > yetime) {
        tx = mapval(pageY, yetime, 750, 0, -200)
        ty = 0
        angle = mapval(pageY, yetime, 750, -50, -80)
      }
      var food = document.getElementById('yeatfood1')
      food.style = 'transform: translate(' + tx + 'px, ' + ty + 'px) rotate(' + angle + 'deg)'

      if (pageY > yetime) {
        angle = mapval(pageY, yetime, 750, -50, -40)
      }
      var food = document.getElementById('yeatfood2')
      food.style = 'transform: translate(' + tx + 'px, ' + ty + 'px) rotate(' + angle + 'deg)'

      if (pageY > yetime) {
        angle = mapval(pageY, yetime, 750, -50, -0)
      }
      var food = document.getElementById('yeatfood3')
      food.style = 'transform: translate(' + tx + 'px, ' + ty + 'px) rotate(' + angle + 'deg)'

      if (pageY > yetime) {
        angle = mapval(pageY, yetime, 750, -50, -20)
      }
      var food = document.getElementById('yeatfood2a')
      food.style = 'transform: translate(' + tx + 'px, ' + ty + 'px) rotate(' + angle + 'deg)'

      if (pageY > yetime) {
        angle = mapval(pageY, yetime, 750, -50, -60)
      }
      var food = document.getElementById('yeatfood2c')
      food.style = 'transform: translate(' + tx + 'px, ' + ty + 'px) rotate(' + angle + 'deg)'
    },
    async onSubmit() {
      try {
        const response = await submitEnquiry(this.enquiry)
        console.log('Enquiry response', response)
        this.enquiry = {}
      } catch (error) {
        console.log('Enquiry error', error)
      }
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
  .yeatfood {
    position: absolute;
    top: 0;
    left: 80px;
    z-index: -10;
  }
</style>
