<template>
  <div>
    <section class="section pb-0 main-section bg-gradient-warning">
      <main class="container card shadow shadow-lg--hover mt-5" id="memoryGame">
        <!-- <h1>{{title}}</h1> -->

        <div class="card-wrapper">
          <ul>
            <li class="card-elm" @click="toggleCard($event)">
                <div class="back">1 back</div>
                <div class="front">1 front</div>
            </li>
            <li class="card-elm">2</li>
            <li class="card-elm">3</li>
            <li class="card-elm">4</li>
            <li class="card-elm">5</li>
            <li class="card-elm">6</li>
            <li class="card-elm">7</li>
            <li class="card-elm">8</li>
            <li class="card-elm">9</li>
            <li class="card-elm">10</li>
            <li class="card-elm">11</li>
            <li class="card-elm">12</li>
            <li class="card-elm">13</li>
            <li class="card-elm">14</li>
            <li class="card-elm">15</li>
            <li class="card-elm">16</li>
          </ul>
        </div>
      </main>
    </section>
  </div>
</template>
<script>
export default {
  name: "MemoryGame",
  data: function() {
    return {
      title: "Memory Game"
    };
  },

  methods: {
      toggleCard(e){
          e.target.parentElement.classList.toggle('is-flipped')

      }
  }
};
</script>

<style scoped>
section.main-section {
  height: 100vh;
  display: flex;
  justify-content: center;
}
main {
  margin: 4rem auto;
  padding: 2rem 3rem 3rem;
  max-width: 750px;
}
ul {
    padding: 0;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  text-align: center;
  margin: 0 auto;
}
li {
  list-style: none;
  height: 7rem;
  width: 7rem;
  background: rgb(46, 61, 73);
  margin: 1rem auto;
  border-radius: 10px;
  box-shadow: rgba(46, 61, 73, 0.5) 0.31rem 0.125rem 1.5rem 0px;
  pointer-events: auto;
  cursor: pointer;
 
  position: relative;
  transition: transform .5s;
  transform-style: preserve-3d;
}
.card-wrapper{
    overflow: auto;
}
.front{
position: absolute;
  width: 100%;
  height: 100%;
  line-height: 260px;
  color: white;
  text-align: center;
  font-weight: bold;
  border-radius: 10px;
  font-size: 40px;
  backface-visibility: hidden;
  background: rgb(46, 61, 73);;
}
.back{
    position: absolute;
  width: 100%;
  height: 100%;
  line-height: 260px;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  backface-visibility: hidden;
   background: blue;
  transform: rotateY(180deg);
}
.li.is-flipped {
  transform: rotateY(180deg);
}

.card-elm {
  transition: transform .5s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
}
.card-elm.is-flipped {
  transform: rotateY(180deg);
}
</style>
