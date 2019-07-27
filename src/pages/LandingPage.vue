<template>
  <div>
    <ParallaxHero />
    <SellingPoints />
    <ContactForm />
  </div>
</template>

<script>
import * as components from '@/components'

export default {
  name: 'LandingPage',
  components: { ...components }
}
</script>
