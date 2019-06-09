<template>
  <div>
    <section class="section pb-0 main-section bg-gradient-warning">
      <main class="container card shadow shadow-lg--hover mt-5" id="memoryGame">
        <div class="game-header mb-3">
          <div class="title">
            <h4>Memory Game</h4>
          </div>
          <div class="moves">
            <p>Moves : {{moves}}</p>
          </div>
          <div class="timer">
            <p>Time : {{timer}}</p>
          </div>
          <div class="reset-game">
            <button class="btn btn-default btn-sm" @click="startGame">{{this.started ? 'Restart':'Start'}} Game</button>
          </div>
        </div>

        <div class="card-wrapper">
          <ul class="card-list">
            <li class="card-elm" data-id="1" @click="toggleCard">
              <div class="back" data-card="Tiger"></div>
              <div class="front"></div>
            </li>
            <li class="card-elm" data-id="2" @click="toggleCard">
              <div class="back" data-card="Tiger"></div>
              <div class="front"></div>
            </li>
            <li class="card-elm" data-id="3" @click="toggleCard">
              <div class="back" data-card="Lion"></div>
              <div class="front"></div>
            </li>
            <li class="card-elm" data-id="4" @click="toggleCard">
              <div class="back" data-card="Lion"></div>
              <div class="front"></div>
            </li>
            <li class="card-elm" data-id="5" @click="toggleCard">
              <div class="back" data-card="Elephant"></div>
              <div class="front"></div>
            </li>
            <li class="card-elm" data-id="6" @click="toggleCard">
              <div class="back" data-card="Elephant"></div>
              <div class="front"></div>
            </li>
            <li class="card-elm" data-id="7" @click="toggleCard">
              <div class="back" data-card="Mouse"></div>
              <div class="front"></div>
            </li>
            <li class="card-elm" data-id="8" @click="toggleCard">
              <div class="back" data-card="Mouse"></div>
              <div class="front"></div>
            </li>
            <li class="card-elm" data-id="9" @click="toggleCard">
              <div class="back" data-card="Fox"></div>
              <div class="front"></div>
            </li>
            <li class="card-elm" data-id="10" @click="toggleCard">
              <div class="back" data-card="Fox"></div>
              <div class="front"></div>
            </li>
            <li class="card-elm" data-id="11" @click="toggleCard">
              <div class="back" data-card="Donkey"></div>
              <div class="front"></div>
            </li>
            <li class="card-elm" data-id="12" @click="toggleCard">
              <div class="back" data-card="Donkey"></div>
              <div class="front"></div>
            </li>
            <li class="card-elm" data-id="13" @click="toggleCard">
              <div class="back" data-card="Cat"></div>
              <div class="front"></div>
            </li>
            <li class="card-elm" data-id="14" @click="toggleCard">
              <div class="back" data-card="Cat"></div>
              <div class="front"></div>
            </li>
            <li class="card-elm" data-id="15" @click="toggleCard">
              <div class="back" data-card="Rhino"></div>
              <div class="front"></div>
            </li>
            <li class="card-elm" data-id="16" @click="toggleCard">
              <div class="back" data-card="Rhino"></div>
              <div class="front"></div>
            </li>
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
      title: "Memory Game",
      cardOpenCounter: 0,
      tempOpenedCard: [],
      timer: 0,
      moves: 0,
      result: 0,
      started:false
    };
  },
  methods: {
    
    toggleCard(e) {
      this.cardOpenCounter++;

      e.target.parentElement.classList.add("is-flipped");
      this.moves++;
      this.tempOpenedCard.push(
        e.target.parentElement.firstChild.getAttribute("data-card")
      );
      if (this.cardOpenCounter === 2) {
        console.log("in if");

        if (this.tempOpenedCard[0] !== this.tempOpenedCard[1]) {
          this.resetCard();
        } else {
          this.result++;
        }
        this.cardOpenCounter = 0;
        this.tempOpenedCard = [];
      }
      this.checkForWin();
    },
    resetCard() {
      var backList = $(".back");
      let that = this;
      backList.each(function() {
        if (
          $(this).attr("data-card") === that.tempOpenedCard[0] ||
          $(this).attr("data-card") === that.tempOpenedCard[1]
        ) {
          console.log("resetting...");
          setTimeout(() => {
            $(this)
              .closest("li")
              .removeClass("is-flipped");
          }, 700);
        }
      });
    },
    startGame(){
      this.loadGame();
      this.started = true;
       var x = setInterval(
        function() {
          this.timer++;
          console.log("sas");
        }.bind(this),
        1000
      );
      this.timer = 0;
      this.moves = 0;
    },
    loadGame() {
      var backList = $(".back");
      backList.each(function() {
        $(this).text($(this).attr("data-card"));
      });
      this.shuffleCards();
     
    },
    shuffleCards() {
      this.cardOpenCounter = 0;
      this.tempOpenedCard = [];
      this.closeCards();
      var ul = document.querySelector(".card-list");
      for (var i = ul.children.length; i >= 0; i--) {
        ul.appendChild(ul.children[(Math.random() * i) | 0]);
      }
    },
    closeCards() {
      var backList = $(".back");
      backList.each(function() {
        $(this)
          .closest("li")
          .removeClass("is-flipped");
      });
    },
    checkForWin() {
      if (this.result === 8) {
        setTimeout(() => {
          alert("You won");
        }, 700);
      }
    }
  },
  computed: {},
  created: function() {},
  mounted: function() {
    this.loadGame();
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
  transition: transform 0.5s;
  transform-style: preserve-3d;
}
.card-wrapper {
  overflow: auto;
}
.front {
  position: absolute;
  width: 100%;
  height: 100%;
  color: white;
  text-align: center;
  font-weight: bold;
  border-radius: 10px;
  font-size: 40px;
  backface-visibility: hidden;
  background: rgb(46, 61, 73);
}
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  border-radius: 10px;
  backface-visibility: hidden;
  background: linear-gradient(87deg, #f57659 0, #e8981d 100%) !important;
  transform: rotateY(180deg);
  display: flex;
  justify-content: center;
  align-items: center;
}
.li.is-flipped {
  transform: rotateY(180deg);
}

.card-elm {
  transition: transform 0.5s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
}
.card-elm.is-flipped {
  transform: rotateY(180deg);
}
.game-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
