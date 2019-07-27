<template>
  <div v-scroll="rotateArm">
    <v-parallax
        dark
        style="height: 1200px"
        src="heroback.jpg">
        <v-layout
          align-center
          column
          justify-center
          style="margin-top: 200px; margin-bottom: 200px;"
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
              <img id="yeatbod" src="yeater_bod.svg" width="400px"/>
              <img id="yeatarm"
                src="yeater_arm.svg"
                width="256px"
                style="transform: rotate(40deg)"/>
              <img class="yeatfood" id="yeatfood3"
                src="yeater_food_3.svg"
                width="256px"
                style="transform: rotate(40deg)"/>
              <img class="yeatfood" id="yeatfood2a"
                src="yeater_food_2a.svg"
                width="256px"
                style="transform: rotate(40deg)"/>
              <img class="yeatfood" id="yeatfood2"
                src="yeater_food_2b.svg"
                width="256px"
                style="transform: rotate(40deg)"/>
              <img class="yeatfood" id="yeatfood2c"
                src="yeater_food_2c.svg"
                width="256px"
                style="transform: rotate(40deg)"/>
              <img class="yeatfood" id="yeatfood1"
                src="yeater_food_1.svg"
                width="256px"
                style="transform: rotate(40deg)"/>
            </div>
          </v-flex>
        </v-layout>
        <v-layout align-center justify-center>
          <!-- <v-dialog
            v-model="ticketModalState"
            width="500">
            <template v-slot:activator="{ on }">
                  <v-btn v-on="on" text dark>Contact</v-btn>
            </template>
            <v-card>THICC MEMES</v-card>
          </v-dialog> -->
          <p class="display-1">Contact Us</p>
        </v-layout>
      </v-parallax>

      <v-layout dark align-center justify-center style="background: #000; padding-bottom: 100px; padding-top: 60px">
  <form style="width: 60%; margin: auto;">
    <v-text-field dark
      v-model="name"
      label="Name"
      required />
    <v-text-field dark
      v-model="email"
      label="E-mail"
      required />
    <v-textarea dark
      v-model="message"
      name="contactMessage"
      label="Message"
      required />

    <v-btn dark @click="onSubmit" class="mr-4">submit</v-btn>
  </form>
      </v-layout>


      <v-parallax
        dark
        style="height: 1200px"
        src="heroback.jpg">
        <v-layout
          align-center
          column
          justify-center
          style="margin-top: 200px; margin-bottom: 200px;"
          >
          <h1 class="display-4 font-weight-thin mb-4">Yeats</h1>
          <h4 class="display-1 font-weight-thin">What you don't eat, you Yeat.</h4>
        </v-layout>
        <v-layout>
          <v-flex xs6 pa-5 font-weight-light>
            <h2 class="display-2 my-5 font-weight-light">Just Yeat it!</h2>
            <p>Ever felt bad for throwing out food? Why chuck it when you could Yeat it? Yeat connects you with local homeless shelters, and we make sure your excess food does not go to waste. Just let us know whenever you have excess food, and one of our awesome Yeaters will come pick it up for you!</p>
            <p>Interested in helping out? Become a Yeater today!</p>
          </v-flex>
          <v-flex xs6>
            <div id="yeater" style="position: relative" width="400px">
              <img id="yeatbod" src="yeater_bod.svg" width="400px"/>
              <img id="yeatarm"
                src="yeater_arm.svg"
                width="256px"
                style="transform: rotate(40deg)"/>
              <img class="yeatfood" id="yeatfood3"
                src="yeater_food_3.svg"
                width="256px"
                style="transform: rotate(40deg)"/>
              <img class="yeatfood" id="yeatfood2a"
                src="yeater_food_2a.svg"
                width="256px"
                style="transform: rotate(40deg)"/>
              <img class="yeatfood" id="yeatfood2"
                src="yeater_food_2b.svg"
                width="256px"
                style="transform: rotate(40deg)"/>
              <img class="yeatfood" id="yeatfood2c"
                src="yeater_food_2c.svg"
                width="256px"
                style="transform: rotate(40deg)"/>
              <img class="yeatfood" id="yeatfood1"
                src="yeater_food_1.svg"
                width="256px"
                style="transform: rotate(40deg)"/>
            </div>
          </v-flex>
        </v-layout>
        <v-layout align-center justify-center>
          <!-- <v-dialog
            v-model="ticketModalState"
            width="500">
            <template v-slot:activator="{ on }">
                  <v-btn v-on="on" text dark>Contact</v-btn>
            </template>
            <v-card>THICC MEMES</v-card>
          </v-dialog> -->
          <p class="display-1">Contact Us</p>
        </v-layout>
      </v-parallax>
  </div>
</template>

<script>
import * as components from '@/components'
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
        if (f < 0) f = 0
        else if (f > 1) f = 1
        return dstlow + f * (dsthi - dstlow)
      }
      var pageY = window.scrollY
      console.log(pageY)
      var arm = document.getElementById('yeatarm')
      // var angle = (300 *0.5) - pageY * 0.5
      // map [220,400] to [40,-50]
      // rotation range: 40 to -50
      // if (angle < -50) angle = -50;
      // if (angle > 40) angle = 40;
      var angle = mapval(pageY, 0, 400, 40, -50)
      var tx = mapval(pageY, 0, 400, 150, 0)
      var ty = mapval(pageY, 0, 400, 50, 0)
      arm.style = 'transform: translate(' + tx + 'px, ' + ty + 'px) rotate(' + angle + 'deg)'
      var body = document.getElementById('yeatbod')
      body.style = 'transform: translate(' + tx + 'px, ' + ty + 'px)'
      if (pageY > 400) {
        tx = mapval(pageY, 400, 750, 0, -200)
        ty = 0
        angle = mapval(pageY, 400, 750, -50, -80)
      }
      var food = document.getElementById('yeatfood1')
      food.style = 'transform: translate(' + tx + 'px, ' + ty + 'px) rotate(' + angle + 'deg)'

      if (pageY > 400) {
        angle = mapval(pageY, 400, 750, -50, -40)
      }
      var food = document.getElementById('yeatfood2')
      food.style = 'transform: translate(' + tx + 'px, ' + ty + 'px) rotate(' + angle + 'deg)'

      if (pageY > 400) {
        angle = mapval(pageY, 400, 750, -50, -0)
      }
      var food = document.getElementById('yeatfood3')
      food.style = 'transform: translate(' + tx + 'px, ' + ty + 'px) rotate(' + angle + 'deg)'


      if (pageY > 400) {
        angle = mapval(pageY, 400, 750, -50, -20)
      }
      var food = document.getElementById('yeatfood2a')
      food.style = 'transform: translate(' + tx + 'px, ' + ty + 'px) rotate(' + angle + 'deg)'

      if (pageY > 400) {
        angle = mapval(pageY, 400, 750, -50, -60)
      }
      var food = document.getElementById('yeatfood2c')
      food.style = 'transform: translate(' + tx + 'px, ' + ty + 'px) rotate(' + angle + 'deg)'
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
