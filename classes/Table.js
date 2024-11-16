
import Dealer from './Dealer.js';
import Round from './Round.js';

export default class Table {
    //#numOfChairs;
    constructor(numOfChairs) { 
        this.players = [];
        this.dealer = new Dealer();
        //this.#numOfChairs = numOfChairs;
     }
     startRound(){
        let round = new Round(this.dealer, this.players);
        round.start();
    }

    addPlayer(player, position){
        this.players[position] = player;
    }

    removePlayer(position){
        this.players[position] = null;
    }
  }