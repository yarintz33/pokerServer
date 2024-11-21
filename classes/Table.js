import Dealer from "./Dealer.js";
import Player from "./Player.js";
import Round from "./Round.js";

export default class Table {
  #numOfChairs;
  #numOfPlayers;

  constructor(numOfChairs) {
    this.inRoom = [];
    this.chairs = [];
    this.dealer = new Dealer();
    this.round = new Round(this.dealer);
    this.#numOfChairs = numOfChairs;
    this.#numOfPlayers = 0;
  }

  start() {
    //while (this.#numOfPlayers > 1) {
    this.startRound();
    //}
  }

  startRound() {
    let round = new Round(this.dealer, this.chairs);
    console.log("starting");
    round.start(this.chairs);
  }

  addPlayer99(player, position) {
    if (this.chairs[position] == null) {
      //this.chairs[position] = player;
      this.chairs[position] = new Player("mike", 500);
      ++this.#numOfPlayers;
      console.log("players:" + this.#numOfPlayers);
      if (this.#numOfPlayers == 2) {
        this.start();
      }
    } else {
    }
  }

  removePlayer(position) {
    this.chairs[position] = null;
  }

  get numOfChairs() {
    return this.#numOfChairs;
  }
}
