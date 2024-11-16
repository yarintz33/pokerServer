export default class Round {
    constructor(dealer, players) { 
        this.dealer = dealer;
        this.players = players;
     }
     start(){

        this.dealer.dealPlayers(this.players);

        // wait for players response..
        this.dealer.dealFlop();
        this.dealer.dealTurn();
        this.dealer.dealRiver();
    }

    setAllPlayersParticipants(){
        this.players.forEach(player => {
            player.isParticipant = true;
            });
    }
  }