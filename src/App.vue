<template>
  <div id="app">
      <router-view/>
      <Navigation></Navigation>
  </div>
</template>
<script>
import Navigation from './components/Navigation'
export default {
    components: {
      'Navigation': Navigation
    }
}
</script>
<style>
  @import './assets/css/style.css';
</style>