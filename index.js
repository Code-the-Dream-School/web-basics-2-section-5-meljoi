
//------------------------ Game Project---------------------------
//Do you remember the game Battleship we created before? well .... it is time to make it with the DOM!!
//We are providing you with the design of a board (in the DOM) for a player1, you have to create the board for the player2 using the id property 'board_player2' -> it is the second list (ul) in your index.html file
//First ask the players for their names (use propmt)
//Now each time the turn player clicks on any cell of the opponent's board (you have to verify if the player is clicking the right board) the program needs to verify if there is an opponent's ship in that cell. If it is then the opponent has one less ship
//We want you to store the data of each player in two Player objects. Each object has to store: name, remaining boats, and their respective board.
//Each board needs to be initialized randomly with '0' and four '1' wich means the state of the cell. Numbers 1 are representing the 4 positions of the player's ships
//Also we want you to display the name of the turn player in the tag that has the id 'turn_player'. And if there is a winner  a text with: 'Congratulationes {name_player}!! you win'
//in the index.html file you are going to find 4 more ids: 'name_player1' , 'name_player2' , 'ships_player1' , 'ships_player2'. We want to see the information of each player in the respective elements
//As our previous Battleship, the winner is the player that hits the 4 opponent's ships first
//one more Thing create a 'reset' and a 'new game' buttons as childs of the element with the id 'buttons'. the reset button has to start the game again and the new game create a new game with new players and a new random board.

const board_Player1 = document.getElementById('board_player1');

for (var x = 0; x < 4; x++) {

    const li = document.createElement('li'); // creating childs for the list (board), in this case represent a row number 'x' of the board

    for (var y = 0; y < 4; y++) {
      const cell = document.createElement('div');
      cell.className = "square"; // adding css properties to make it looks like a square
      cell.textContent = `${x},${y}`;  // saves the coordinates as a string value 'x,y'
      cell.value = 0;//state of the cell

      //this function adds the click event to each cell
      cell.addEventListener( 'click', (e) => {
          let cell = e.target; // get the element clicked
          console.log( cell.textContent) //display the coordinates in the console
          //cell.style.visibility = 'hidden';// this  means that the contents of the element will be invisible, but the element stays in its original position and size / try it clicking on any of the black cells (in your browser) and see whats happens
          cell.style.background ="purple"; //with this propertie you can change the background color of the clicked cell. try comment the line bellow and uncomment this line. Do not forget to save this file and refresh the borwser to see the changes
           let coordX = cell.textContent.slice(0,1);//breaks up the coordinates in each cell one for x and y
           let coordY = cell.textContent.slice(2,3);
          //console.log(coordX, coordY)
          player1.gameBoard[coordX][coordY]//connects the cell coordinates to the random ship placements in the boardPlacement function.
          //console.log(player1.gameBoard[coordX][coordY])
          if(player1.gameBoard[coordX][coordY]===1){//if the cell click matches the random ship placement then it will be a hit.
            alert("hit");
            shipsP1.textContent -= 1;
            player1.gameBoard[coordX][coordY] = 0;
            console.log(player1.gameBoard[coordX][coordY])
             }
            //if ('clicked'){//or if currentPlayer clicks opponentPlayer.gameBoard then -1
            //cell='disable'

            //shipsP1 ++;
            //cell('disabled', true)//trying to disable the button after being clicked
            //$('#square').attr("disabled", true);
          //}
          // if (player1.gameBoard ==0){//need to put if clicked twice
          //   alert(`${player2.name} you already sank this ship`)

            //playerSwitch()//MJF: thought if the functions were created on the outside i could just call them in the event handler and it would work but its not.
      });

      li.appendChild(cell); //adding each cell into the row number x
    }

     board_Player1.appendChild(li); //adding each row into the board
}


//player2 GameBoard
const board_Player2 = document.getElementById('board_player2');

for (var x = 0; x < 4; x++) {

    const li = document.createElement('li'); // creating childs for the list (board), in this case represent a row number 'x' of the board

    for (var y = 0; y < 4; y++) {
      const cell = document.createElement('div');
      cell.className = "square"; // adding css properties to make it looks like a square
      cell.textContent = `${x},${y}`;  // saves the coordinates as a string value 'x,y'
      cell.value = 0;//state of the cell

      //this function adds the click event to each cell
      cell.addEventListener( 'click', (e) => {
          let cell = e.target; // get the element clicked
          console.log( cell.textContent) //display the coordinates in the console
          //cell.style.visibility = 'hidden';// this  means that the contents of the element will be invisible, but the element stays in its original position and size / try it clicking on any of the black cells (in your browser) and see whats happens
          cell.style.background ="purple"; //with this propertie you can change the background color of the clicked cell. try comment the line bellow and uncomment this line. Do not forget to save this file and refresh the borwser to see the changes
          let coordX = cell.textContent.slice(0,1)//breaks up the coordinates in each cell one for x and y
          let coordY = cell.textContent.slice(2,3)
          player2.gameBoard[coordX][coordY]//connects the cell coordinates to the random ship placements in the boardPlacement function.
          console.log(player2.gameBoard[coordX][coordY])
          if(player2.gameBoard[coordX][coordY]===1){//if the cell click matches the random ship placement then it will be a hit.
            alert("hit");
            shipsP2.textContent -= 1;
            player2.gameBoard[coordX][coordY] = 0;
          }




      });

      li.appendChild(cell); //adding each cell into the row number x
    }

     board_Player2.appendChild(li); //adding each row into the board
}

//objects for each player
let player1 = {
  name:prompt("Player1, please enter your name"),
  shipCount:4,
  gameBoard: [[0,0,0,0],
[0,0,0,0],
[0,0,0,0],
[0,0,0,0]]


}

let player2 = {
  name:prompt("Player2, please enter your name"),
  shipCount:4,
  gameBoard:[[0,0,0,0],
[0,0,0,0],
[0,0,0,0],
[0,0,0,0]]

}

// cell;//MJF: thought if i made the variable global that other functions can access but not working.
// let coordX = cell.textContent.slice(0,1);//breaks up the coordinates in each cell one for x and y
// let coordY = cell.textContent.slice(2,3);
// console.log(coordX, coordY)

//insert the value of the name prompt to the id 'name_player1'
let p1 = document.querySelector('#name_player1')//.value = player1;
p1.textContent = player1.name

//place number of remaining ships in the id ships_player1
 let shipsP1 = document.getElementById('ships_player1')
 shipsP1.textContent = player1.shipCount;

 //insert the value of the name prompt to the id 'name_player2'
 let p2 = document.querySelector('#name_player2')
 p2.textContent = player2.name

 //place number of remaining ships in the id ships_player2
  let shipsP2 = document.getElementById('ships_player2')
  shipsP2.textContent = player2.shipCount;

 //set up the ships
function boardPlacement () {
    let ships=0;
    let xPos;
    let yPos;

      while(ships < player1.shipCount){
        xPos = Math.floor(Math.random() * 4);
        yPos = Math.floor(Math.random() * 4);
          if(parseInt(player1.gameBoard[xPos][yPos])!==1){
            player1.gameBoard[xPos][yPos] = 1;
            ships++;
          }
        }
          ships=0;
          while(ships < player2.shipCount){
            xPos = Math.floor(Math.random() * 4);
            yPos = Math.floor(Math.random() * 4);
              if(parseInt(player2.gameBoard[xPos][yPos])!==1){
                player2.gameBoard[xPos][yPos] = 1;
                ships++;
              }

        }

}boardPlacement();

let opponentPlayer;
let currentPlayer;
let count=0

// function playerSwitch (){//MJF:when uncommented, this function is coming up before the board is formed.
// JTK note - its because your while condition is while(true) - it will keep evaluating forever if the loop is set up like that
// while(< whatever is in here evaluates to true or false. If true, the loop runs. If not, it doesn't. So if you put "true" in here it will always run>)

//   while(true){
// //currentPlayer.textContent = turnPlayer
//   if(+(count%2)==0){
//     currentPlayer = player1.name;
//     opponentPlayer = player2.name;
//
//     alert(`Your turn ${player2.name}`);
// } else{
//     opponentPlayer = player1.name;
//       alert(`Your turn ${player1.name}`);
// }
//
// }
//
// }playerSwitch()
//
// turnPlayer = 0;
// function turn (){
//   let turnPlayer = document.getElementById('turn_player');
//
//   if (turnPlayer === currentPlayer){
//   turnPlayer.textContent;//MJF: thought the value would display but it's not.
//   console.log(turnPlayer, 'yo')
// }else if(turnPlayer === opponentPlayer){
//   turnPlayer.textContent;
// }
//
//   console.log(turnPlayer, 'happy')
// }turn()


//have a function to declare the winner(look at the other version)
function win(){//MJF: not sure why this would not work
  console.log('Win function running!')
  console.log(typeof shipsP1.textContent)
  // JTK note on this ^^: I'm adding that to make sure it isn't coming back as a string. Typeof will tell you if it is a string or number

  if(shipsP1.textContent===0){
    alert(`${player2.name} is the winner!`);
  }else if(shipsP2.textContent===0){
    alert(`${player1.name} is the winner!`);
  }
} win(); // JTK note: should this be called here, or should this be called after each turn to check for a win condition?


//reset and new game buttons
function reSet(){//try to get the reset button to connect to the Dom by connecting it to the function with the boardPlacement
console.log('ReSet function running!')
let resetBtn = document.createElement('button')
let button = document.getElementById('buttons').appendChild(resetBtn)
resetBtn.textContent = "Reset"

button.addEventListener("click", boardPlacement);//MJF: i looked this up but it's not reseting the game when i call this function
 player1.gameboard;
 player2.gameboard;

} reSet() // JTK note - right now this is also getting called right after you declare it... probably needs to be only called when they push a button


//figure out how to use the event listener to start the game from very begining with name prompts.
function reStart(){
console.log('Restart function running!')
let newGameBtn = document.createElement('button')
let button = document.getElementById('buttons').appendChild(newGameBtn)
newGameBtn.textContent = "New Game"
button.addEventListener('click', ()=> {

})
}reStart() // JTK note - same thing, probably want to call this elsewhere right now it would be resetting your board after you



/*

One other note from me - I think a lot of your logic is in the ballpark of where it needs to be actually. I'm just seeing that there are
connections missing between things. That's OK! That's a hard part.

I think your BIGGEST challenge is figuring out the timing for your reset, restart, and turn functions

In this type of game, I would recommend taking a step back: what piece of information do you have right now that tells you someone took a turn? A click

It gets a little more complicated than that because you need to keep track of the current player and what board they are allowed to click on, but that is the
biggest hint I would give you. If you structure it as 1 click (on a valid spot) = one turn, I think that's the first step

Second: When should you evaluate your win logic? Maybe on each turn, since the score could have changed every time a turn occurs...

I know your other reviewer recommended a 1:1 session with Tom and that is a good idea too but I wanted to give you a couple notes and I will also be having my session tomorrow
and we can take a look at this! 

*/
