
export default class Player{
    #isParticipant;
    #cards;
    #budget;
    #name;
    constructor(playerName, budget){
        this.#budget = budget;
        this.#isParticipant = false;
        this.#name = playerName;
    }

    get isParticipant(){
        return this.#isParticipant;
    }

    set isParticipant(bool){
        this.#isParticipant = bool;
    }

    get cards(){
        return this.#cards;
    }

    set cards(cards){
        this.#cards = cards;
        console.log("my cards are : " + cards);
    }

}