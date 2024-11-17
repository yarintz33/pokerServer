
import Dealer from './Dealer.js';
import Round from './Round.js';

export default class Table {
    #numOfChairs;
    constructor(numOfChairs) { 
        this.inRoom = [];
        this.chairs = [];
        this.dealer = new Dealer();
        this.#numOfChairs = numOfChairs;
     }
     startRound(){
        let round = new Round(this.dealer, this.chairs);
        round.start();
    }

    addPlayer99(player, position){
        if(this.chairs[position] == null){
            this.chairs[position] = player;
        }else{
            //handle
        }
    }

    removePlayer(position){
        this.chairs[position] = null;
    }

    get numOfChairs(){
        return this.#numOfChairs;
    }
  }