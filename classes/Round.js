export default class Round {
  #players;
  constructor(dealer) {
    this.dealer = dealer;
  }
  start(players) {
    this.players = players;
    console.log("in round.start()");
    this.dealer.dealPlayers(this.players);

    // wait for players response..
    this.dealer.dealFlop();
    this.dealer.dealTurn();
    this.dealer.dealRiver();
  }

  setAllPlayersParticipants() {
    this.players.forEach((player) => {
      player.isParticipant = true;
    });
  }
}
