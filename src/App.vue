<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Landing msg="hello from landing component" />
    <login/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Landing from './components/Landing.vue'
import Login from './components/Login.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    // Landing,
    Login
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
  
}
</style>
