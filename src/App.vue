<template>
  <div class="header">
    <router-view/>
  </div>
</template>

<script>
export default {
  computed:{
    getMovies(){
      return this.$store.state.movies
    }
  },
  mounted(){
    this.$store.dispatch('getTrending');
  }
}
</script>

<style>
*, *::before, *::after{
  box-sizing: border-box;
}
body{
  margin: 0;
  padding: 0;
  background: linear-gradient(90deg, #000000, #422121);
}
#app {
  width: 100vw;
  height: 100vh;
  color: #FF6363 
}
</style>
