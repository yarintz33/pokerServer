
export default class Player{
    #isParticipant;
    #cards;
    #budget;
    constructor(){
        this.#isParticipant = false;
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