<template>
  <div id="app">
    <img src="./assets/logo.png">
    <navlist></navlist>
    <router-view/>
  </div>
</template>

<script>
import navlist from '@/components/navlist'
export default {
  name: 'App',
  components: {navlist}
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
