<template>
    <div class="cards-container">
        <Card 
        v-for="(movie, index) in movies" 
        :key="movie.id" :movie="movie" :index="index"
        :style="[movie.selected ? {'zIndex':movies.length} : setzIndex(index)]"
        ></Card>
    </div>
</template>

<script>
import Card from './card'
export default {
    name: 'Cards',
    components: {
        Card
    },
    props: {
        movies: Array
    },
    computed:{
        currentMovie(){
            return this.$store.getters.getCurrentMovie
        }
    },
    methods:{
        setzIndex(index){
            if(index < this.currentMovie){
                return {zIndex : this.currentMovie - index}
            }else
            if(index > this.currentMovie){
                return {zIndex : this.movies.length - (index-this.currentMovie)}
            }
            // console.log(index)
            // console.log(this.currentMovie)
        }
    }
    
}
</script>