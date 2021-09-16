<template>
  <div id="app">
    <component :is="'componentA'"></component>
    <hr>
    <component :is="'componentB'"></component>
  </div>
</template>

<script>
import componentB from './components/componentB.vue'
import componentA from './components/componentA.vue'

export default {
  name: 'App',
  components: {
    componentA,
    componentB
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
