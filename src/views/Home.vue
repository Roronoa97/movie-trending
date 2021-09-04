<template>
  <div class="main">
    <Cards :movies="movies"></Cards>
  </div>
</template>

<script>
import Cards from '../components/cards'

export default {
  name: 'Home',
  data(){
    return {
      
    }
  },
  components: {
    Cards
  },
  computed:{
    movies(){
      return this.$store.getters.getMovies
    }
  },
 
}
</script>
