<template>
  <div id="app" class="pb-5" v-bind:style="style">
    <Header/>
  </div>
</template>

<script>
  import Header from './components/Header/Header.vue'

  import bg_img_green from './assets/images/bg_green.jpg'
  import bg_img_blue from './assets/images/bg_blue.jpg'
  import bg_img_red from './assets/images/bg_red.jpg'
  import bg_img_orange from './assets/images/bg_orange.jpg'
  import bg_img_purple from './assets/images/bg_purple.jpg'
  import bg_img_yellow from './assets/images/bg_yellow.jpg'
  import bg_img_turquoise from './assets/images/bg_turquoise.jpg'

  export default {
    name: 'App',
    components: {
      Header
    },
    data() {
      return {
        style: {
          backgroundImage: `url(${getRandomImageName([bg_img_green, bg_img_blue, bg_img_red, bg_img_orange, bg_img_purple, bg_img_yellow, bg_img_turquoise])})`
        }
      }
    },
    methods: {}
  }

  function getRandomImageName(imageNames) {
    return imageNames[Math.floor(Math.random() * imageNames.length)]
  }
</script>

<style scoped>
  #app {
    min-height: 100%;
    width: 100%;
    height: auto;
    position: fixed;
  }
</style>
