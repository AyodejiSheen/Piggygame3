var scores, activePlayer, dice, dice2, roundscore;

init();




// to enable roll-dice button
document.querySelector('.roll-dice').addEventListener('click', function () {


    // Random number for dice 1
    dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);


    //random number for dice two.
    dice2 = Math.floor(Math.random() * 6) + 1;
    console.log("dice two =" + dice2);

    //to easy dice selection
    var diceDOM = document.querySelector('.dice');
    var dice2DOM = document.querySelector('.dice-2');

    //to change dice image
    diceDOM.src = "dice-" + dice + ".svg";
    dice2DOM.src = "dice-" + dice2 + " - Copy.svg";

    //to display dice
    diceDOM.style.display = "block";

    //to update current score for activeplayer
    document.querySelector('.current-' + activePlayer).textContent = dice;

    //to  update score if 1 is not rolled or switch to next player

    if (dice !== 1 && dice2 !== 1) {
        roundscore = roundscore + dice + dice2;
        document.querySelector('.current-' + activePlayer).textContent = roundscore;

    } else {
        nextplayer();
    }
});


//to implementt hold button..

document.querySelector('.hold-dice').addEventListener('click', function () {

    //add current score to the global score.
    scores[activePlayer] += roundscore;
    document.querySelector('.score-' + activePlayer).textContent = scores[activePlayer];

    //




    //check if player won the game

    if (scores[activePlayer] >= 100) {
        document.querySelector('.player-' + activePlayer).textContent = "YOU WON THE GAME!!!"
        document.querySelector('.player-' + activePlayer).style.color = "rgb(114, 201, 15);"
        document.querySelector('.dice').style.display = "none";
        document.querySelector('.hold-dice').disabled = true;
        document.querySelector('.roll-dice').disabled = true;


    } else {
        //Switch to next player
        nextplayer();
    }



});

function nextplayer() {

    //next player
    if (activePlayer === 0) {
        activePlayer = 1;
        document.querySelector('.player-0').style.color = "gray";
        document.querySelector('.circle-1').style.color ="gray";
        document.querySelector('.player-1').style.color = "red";
        document.querySelector('.circle-2').style.color ="red";
    } else {
        activePlayer = 0;
        document.querySelector('.player-0').style.color = "red";
        document.querySelector('.player-1').style.color = "gray";
        document.querySelector('.circle-2').style.color ="gray";
        document.querySelector('.circle-1').style.color ="red";
    };

    roundscore = 0;

    document.querySelector('.current-0').textContent = "0";
    document.querySelector('.current-1').textContent = "0";


    // OR activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
};

document.querySelector('.new-game').addEventListener('click', function () {
    init();
});

function init() {

    scores = [0, 0];
    roundscore = 0;
    activePlayer = 0;

    document.querySelector('.player-1').style.color = "gray";
    //document.querySelector('.dice').style.display = "none";
    document.querySelector('.player-0').style.color = "red";
    document.querySelector('.circle-1').style.color ="red";
    document.querySelector('.circle-2').style.display = "gray";

    document.querySelector('.score-0').textContent = "0";
    document.querySelector('.score-1').textContent = "0";
    document.querySelector('.current-0').textContent = "0";
    document.querySelector('.current-1').textContent = "0";
    document.querySelector('.player-0').textContent = "PLAYER 1";
    document.querySelector('.player-1').textContent = "PLAYER 2";

    document.querySelector('.hold-dice').disabled = false;
    document.querySelector('.roll-dice').disabled = false;

};

