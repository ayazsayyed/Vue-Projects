<template>
  <div>
    <section class="section pb-0 bg-gradient-warning main-section">

        <div id="demo" class="carousel slide" data-ride="carousel">

  <!-- Indicators -->
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>

  <!-- The slideshow -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://yddqfl5rz7vukwek-zippykid.netdna-ssl.com/wp-content/uploads/2019/02/markus-spiske-544020-unsplash-1700x900.jpg" alt="Los Angeles">
    </div>
    <div class="carousel-item">
      <img src="http://maggiesadler.com/wp-content/uploads/2015/10/1515054_1379051609022475_1394148610_n.jpg" alt="Chicago">
    </div>
    <div class="carousel-item">
      <img src="http://maggiesadler.com/wp-content/uploads/2015/10/1515054_1379051609022475_1394148610_n.jpg" alt="New York">
    </div>
  </div>

  <!-- Left and right controls -->
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>

</div>
    </section>
  </div>
</template>



<script>
import axios from "axios";

export default {
  name: "Movie",
  data: function(){
    return{
      title:'Movie',
      apiKey:'22554514',
      movieData:{}
    }
  },
  methods:{
    getInitialMovies(){
        console.log('Getting movies');
         axios
        .get(`http://www.omdbapi.com/?i=tt3896198&apikey=${this.apiKey}`)
        .then(response => (this.movieData = response.data));
        console.log('data',this.movieData);
    }
  },
  mounted(){
    this.getInitialMovies()
  }
};
</script>

<style scoped>
section.main-section {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.register-link{
  float: right;
  margin-top: 15px;
}
.slider {
  max-width: 1000px;
  margin: 0 auto;
}
</style>


