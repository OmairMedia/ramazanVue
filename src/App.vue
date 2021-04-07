<template>
  <div id="app">
    <nav-bar/>
    <router-view />
  </div>
</template>

<script>
import navBar from './components/navBar'
export default {
  components: {
    "nav-bar": navBar
  }
}
</script>


<style>

</style>
