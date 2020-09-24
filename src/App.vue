<template>
  <div class="container">
    <router-view/>
  </div>
</template>

<script>
export default {

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
  font-family: 'Roboto', 'Poppins',  sans-serif;
  font-size: 1rem;
}
#app {
  width: 100vw;
  height: 100vh;
  color:#ffbdbd
}

ul{
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
