<template>
  <div id="app">
    <formv></formv>
    <labelv></labelv>
    <vuexhaddle></vuexhaddle>
    <filterresult></filterresult>
  </div>
</template>

<script>
import formv from './components/form.vue'
import labelv from './components/label.vue'
import vuexhaddle from './components/vuexhaddle.vue'
import filterresult from './components/filterresult'

export default {
  name: 'app',
  components: {
    formv,
    labelv,
    vuexhaddle,
    filterresult
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  background-image: url("~@/assets/images/ass.png");
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}
</style>
