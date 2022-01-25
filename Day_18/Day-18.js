
//sport team statistics
const team = {
  _players: [ { firtName: 'Luke', age: 30 }, { firstName: 'Sheryl', age: 49 }, { firstName: 'Sascha', age: 37 } ],
  
  _games: [ {opponent: 'lazo', teamPoint: 50, opponentPoints: 50 }, { oponnent: 'Smith', teamPoint: 50, opponentPoints: 25 },
            { opponent: 'The Faria', teamPoints: 42, opponentsPoints: 27 } ],
    //only getter methods since no other coders will change it
    get players(){
        return this._player;
    },
    
    get games(){
        return this._games;
    },
    //method to add player
    addPlayer(firstName, age){
        let player = { firstName: firstName, age: age, }
        this._players.push(player); },
    //method to add game
    addGame(name, points, opoPoints){ let game = { opponent: name, teamPoints: points, opponentPoints: opoPoints };
        this._games.push(game); } };
//invoke new playes and game
team.addPlayer('Steph', 28);
team.addPlayer('Bugs', 76);
team.addGame('Jerry', 0, 85);
team.addGame('Giulia', 25, 90);
//print games updated
console.log(team._players);
console.log(team._games);