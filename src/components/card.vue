<template>
  <div class="card" 
  :class="{selected: movie.selected}"
  @click="movie.selected ? displayMovie() : selectMovie(movie.id)"
  >
      <div class="movie-ranking"><span>#</span>{{ index+1}}</div>
      <div class="card-body">
          <div class="card-left">
            <div class="poster">
                <img :id='`poster-${movie.id}`' :src='`https://image.tmdb.org/t/p/w500/${movie.poster_path}`' crossorigin="anonymous" >
            </div>
          </div>
          <div class="card-right">
              <div class="description">
                  <div class="movie-title">
                      <h1 class="title">{{ movie.title }}</h1>
                      <div class="badge">
                          <small>{{ movie.original_language }}</small>
                      </div>
                    </div>
                  <div class="movie-desc">
                      <div class="movie-desc-header">
                          <span>Overview</span>
                          <ul class="genres">
                              <li class="genre"
                              v-for="genre in movie.moviesGenre" 
                              :key="genre.id">
                              {{ genre.name }}
                              </li>
                            </ul>
                      </div>
                      <p>{{ movie.overview }}</p>
                  </div>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
//import Trailer from '../components/trailer'

export default {
    name: 'Card',
    // components: {
    //     Trailer
    // },
    props: {
        movie: Object,
        index: Number
    },
    methods:{
        selectMovie(movieId){
            this.$store.dispatch('selectMovie', movieId);
        },
        displayMovie(){
            console.log('open card')
        }
    }
}
</script>

<style scoped>
.card{
    position: absolute;
    bottom: 50px;
    right: 25%;
    cursor: pointer
}
.movie-ranking{
    position: absolute;
    font-size: 48px;
    font-weight: 700;
    color: #ffbdbd;
    top: -70px;
    left: 20px;
}
.movie-ranking span{
    margin-right: 15px;
    color: #fd5c5c;
}
.card-body{
    display: flex;
    width: 100%;
}
.card.selected{
    width: 900px;
    height: 450px;
    position: absolute;
    background:#862121;
    top: 150px;
    left: 100px;
}
.card.selected .card-body .card-left
{
    width: 40%;
}
.card .card-body .card-right{
    display: none;
}
.card.selected .card-body .card-right{
    display: block;
    padding: 20px;
    width: 60%;
}
.card.selected .card-body .card-left .poster img{
    width: 100%;
    height: 450px;
}
.card .card-body .card-left .poster img{
    width: 300px;
    height: 450px;
}

.movie-title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}
.title{
    margin: 0;
}
.badge small{
    padding: 5px 10px;
    background-color: #ff962a;
    border-radius: 5px;
    color: #000;
    font-weight: 500;
    box-shadow: 5px 5px 20px rgba(0,0,0,.3);
}

.movie-desc > div > span{
    font-style: italic;
    font-weight: 500;
    color: #ff7979;
}
.movie-desc p{
    text-align: justify;
    text-justify: inter-word;
}
.movie-desc-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.genres{
    display: flex;
}
.genre{
    font-size: 12px;
    font-weight: 500;
    font-style: italic;
}
.genre:not(:last-child)::after{
    content:"|";
    margin: 0 5px;
    font-style: normal;
}
</style>