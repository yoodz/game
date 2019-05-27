<template>
  <div id="app">
    <Snake msg="Welcome to Your Vue.js App" count="15" />
    <!-- <HelloWord msg="Welcome to Your Vue.js App" count="15" /> -->
  </div>
</template>

<script>
import Snake from './components/Snake.vue'

export default {
  name: 'app',
  components: {
    Snake
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
