var ticTacToeBoxes = document.querySelectorAll(".box");
var startBtn = document.querySelector(".start");
var resetBtn = document.querySelector(".reset")
var newGameBtn = document.querySelector(".refresh-board");
var player1LivesLeft = document.querySelector("#player1-lives")
var player2LivesLeft = document.querySelector("#player2-lives")
var player1Animate = document.querySelector(".player1Selected")
var modal = document.getElementById("myModal")
// var modalResetBtn = document.getElementById("myBtn-reset")
var closeModel = document.getElementsByClassName("close-modal")[0]
var confirmResetBtn = document.querySelector(".Yes-reset")
var spotTakenAlert = document.querySelector(".box-selected")

var lastPlayer = "player2";
var winningPlayer = 0
var player1Boxes = [];
var player2Boxes = [];
var winState1 = [0,1,2]
var winState2 = [3,4,5]
var winState3 = [6,7,8]
var winState4 = [0,3,6]
var winState5 = [1,4,7]
var winState6 = [2,5,8]
var winState7 = [0,4,8]
var winState8 = [2,4,6]
var player1LivesLeftScore = 3
var player2LivesLeftScore = 3 

startBtn.addEventListener('click', playGame);
// ticTacToeBoxes.addEventListener('click', playGame);

function playGame() {
    switchPlayers() //return player 1 to select
    ticTacToeBoxes.forEach(function(ticTacToeBox) {
        ticTacToeBox.addEventListener("click", markSelected)
    })
}

function switchPlayers() {
    if (lastPlayer === "player1") {
        lastPlayer = "player2"
        return "player2"
    } else {
        lastPlayer = "player1"
        return "player1"
    }
}

function markSelected(event) {
    if (event.target.classList.contains("player1Selected") || event.target.classList.contains("player2Selected")) {
        // alert("Choose another spot, this one has been taken")
        // spotTakenAlert.style.display = "block";
        // window.onclick = function(event) {
        //     if (event.target == modal) {
        //       modal.style.display = "none";
            
    } else {
        if (lastPlayer === "player1") {
            event.target.classList.add("player1Selected");
            // event.target.style.backgroundColor = "pink";
            player1Boxes.push(event.target.textContent)
            checkWinStates()
            playGame()
        } else {
            event.target.classList.add("player2Selected");
            // event.target.style.backgroundColor = "yellow";
            player2Boxes.push(event.target.textContent)
            checkWinStates()
            playGame()
        }
    }    
}

function checkWinStates() {    
    if (lastPlayer === "player1") {
    winningPlayer = "player1"
        if (player1Boxes.sort().join('').includes(winState1.join(''))) {
            winActions(winState1)
            return 
        } else if (player1Boxes.sort().join('').includes(winState2.join(''))) {
            winActions(winState2)
            return  
        } else if (player1Boxes.sort().join('').includes(winState3.join(''))) {
            winActions(winState3)
            return  
        } else if (player1Boxes.sort().join('').includes(winState4.join(''))) {
            winActions(winState4)
            return  
        } else if (player1Boxes.sort().join('').includes(winState5.join(''))) {
            winActions(winState5)
            return  
        } else if (player1Boxes.sort().join('').includes(winState6.join(''))) {
            winActions(winState6)
            return  
        } else if (player1Boxes.sort().join('').includes(winState7.join(''))) {
            winActions(winState7)
            return  
        } else if (player1Boxes.sort().join('').includes(winState8.join(''))) {
            winActions(winState8)    
            return  
        }  
    } else if (lastPlayer === "player2") {
    winningPlayer = "player2"    
        if (player2Boxes.sort().join('').includes(winState1.join(''))) {
            winActions(winState1)
            return 
        } else if (player2Boxes.sort().join('').includes(winState2.join(''))) {
            winActions(winState2)
            return  
        } else if (player2Boxes.sort().join('').includes(winState3.join(''))) {
            winActions(winState3)
            return  
        } else if (player2Boxes.sort().join('').includes(winState4.join(''))) {
            winActions(winState4)
            return  
        } else if (player2Boxes.sort().join('').includes(winState5.join(''))) {
            winActions(winState5)
            return  
        } else if (player2Boxes.sort().join('').includes(winState6.join(''))) {
            winActions(winState6)
            return  
        } else if (player2Boxes.sort().join('').includes(winState7.join(''))) {
            winActions(winState7)
            return  
        } else if (player2Boxes.sort().join('').includes(winState8.join(''))) {
            winActions(winState8)    
            return  
        }   
    }
}

function winActions(winStateNum) {
    var winBoxTextContent = 0;
    for (var index = 0; index < winStateNum.length; index++) {
        winBoxTextContent = winStateNum[index].valueOf()
        ticTacToeBoxes[winBoxTextContent].style.backgroundColor = '#f4f49c'
        ticTacToeBoxes[winBoxTextContent]
    }
    tallyBoard()
}

function tallyBoard() {
    if (winningPlayer === "player1") {
        player2LivesLeftScore = player2LivesLeftScore - 1
        player2LivesLeft.textContent = "2P - " + player2LivesLeftScore
         //need to stop players from continuing to play after game end //
         //popup and then refreshes with new board.
    } else {
        player1LivesLeftScore = player1LivesLeftScore - 1
        player1LivesLeft.textContent = "1P - " + player1LivesLeftScore
        //need to stop players from continuing to play after game end 
    }
        if (player1LivesLeftScore === 0 || player2LivesLeftScore === 0) {
            alert("Game Over! " + winningPlayer + " is champion! Quit Game to have another go :)")
            //need to popup to 'reset game' and then start the resetGame function.m 
        }
    // refresh or reset function depending on score?
}

function refreshBoard() {
    player1Boxes = [];
    player2Boxes = [];
    for (var i = 0; i < ticTacToeBoxes.length; i++) {
        ticTacToeBoxes[i].classList.remove("player1Selected");
        ticTacToeBoxes[i].classList.remove("player2Selected");
        ticTacToeBoxes[i].style.backgroundColor = "white"
        //make sure tally is added. auto refresh after popup? 
    }
}

function popUpResetModal() {
    modal.style.display = "block";
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
}

newGameBtn.addEventListener('click', refreshBoard);
resetBtn.addEventListener('click', popUpResetModal);
confirmResetBtn.addEventListener('click', resetGame); 

function resetGame() {
    modal.onclick = function() {
        modal.style.display = "none";
      }
    lastPlayer = "player2";
    player1Boxes = [];
    player2Boxes = [];
    player1LivesLeftScore = 3
    player2LivesLeftScore = 3 
    for (var i = 0; i < ticTacToeBoxes.length; i++) {
        ticTacToeBoxes[i].classList.remove("player1Selected");
        ticTacToeBoxes[i].classList.remove("player2Selected");
        ticTacToeBoxes[i].style.backgroundColor = "white"
        player1LivesLeft.textContent = "1P - " + player1LivesLeftScore + " Lives"
        player2LivesLeft.textContent = "2P - " + player2LivesLeftScore + " Lives"
        //remove tally. 
    }
}

// window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   }


//*** */checkWinStates for an individual player. 
// var checkWinStates = function() {
//     if (ticTacToeBoxes[0].classList.contains("selected") && ticTacToeBoxes[1].classList.contains("selected") && ticTacToeBoxes[2].classList.contains("selected")) {
//         console.log("WinState1"); 
//         ticTacToeBoxes[0].style.backgroundColor = 'purple'
//         ticTacToeBoxes[1].style.backgroundColor = 'purple'
//         ticTacToeBoxes[2].style.backgroundColor = 'purple'
//     }  else if (ticTacToeBoxes[3].classList.contains("selected") && ticTacToeBoxes[4].classList.contains("selected") && ticTacToeBoxes[5].classList.contains("selected")) {
//         console.log("WinState2");
//         ticTacToeBoxes[3].style.backgroundColor = 'purple'
//         ticTacToeBoxes[4].style.backgroundColor = 'purple'
//         ticTacToeBoxes[5].style.backgroundColor = 'purple'
//     }   else if (ticTacToeBoxes[6].classList.contains("selected") && ticTacToeBoxes[7].classList.contains("selected") && ticTacToeBoxes[8].classList.contains("selected")) {
//         console.log("WinState3"); 
//         ticTacToeBoxes[6].style.backgroundColor = 'purple'
//         ticTacToeBoxes[7].style.backgroundColor = 'purple'
//         ticTacToeBoxes[8].style.backgroundColor = 'purple'
//     }   else if (ticTacToeBoxes[0].classList.contains("selected") && ticTacToeBoxes[3].classList.contains("selected") && ticTacToeBoxes[6].classList.contains("selected")) {
//         console.log("WinState4");
//         ticTacToeBoxes[0].style.backgroundColor = 'purple'
//         ticTacToeBoxes[3].style.backgroundColor = 'purple'
//         ticTacToeBoxes[6].style.backgroundColor = 'purple'
//     }   else if (ticTacToeBoxes[1].classList.contains("selected") && ticTacToeBoxes[4].classList.contains("selected") && ticTacToeBoxes[7].classList.contains("selected")) {
//         console.log("WinState5");
//         ticTacToeBoxes[1].style.backgroundColor = 'purple'
//         ticTacToeBoxes[4].style.backgroundColor = 'purple'
//         ticTacToeBoxes[7].style.backgroundColor = 'purple'
//     }   else if (ticTacToeBoxes[2].classList.contains("selected") && ticTacToeBoxes[5].classList.contains("selected") && ticTacToeBoxes[8].classList.contains("selected")) {
//         console.log("WinState6");
//         ticTacToeBoxes[2].style.backgroundColor = 'purple'
//         ticTacToeBoxes[5].style.backgroundColor = 'purple'
//         ticTacToeBoxes[8].style.backgroundColor = 'purple'
//     }   else if (ticTacToeBoxes[0].classList.contains("selected") && ticTacToeBoxes[4].classList.contains("selected") && ticTacToeBoxes[8].classList.contains("selected")) {
//         console.log("WinState7");
//         ticTacToeBoxes[0].style.backgroundColor = 'purple'
//         ticTacToeBoxes[4].style.backgroundColor = 'purple'
//         ticTacToeBoxes[8].style.backgroundColor = 'purple'
//     }   else if (ticTacToeBoxes[2].classList.contains("selected") && ticTacToeBoxes[4].classList.contains("selected") && ticTacToeBoxes[6].classList.contains("selected")) {
//         console.log("WinState8");
//         ticTacToeBoxes[2].style.backgroundColor = 'purple'
//         ticTacToeBoxes[4].style.backgroundColor = 'purple'
//         ticTacToeBoxes[6].style.backgroundColor = 'purple'
//     }   
// }
// ///*** end of individual check win states */

// }
// //refresh the board, but keep a tally. two players are still playing.
// var refreshBoard = function(event) {
//     event.target.classList.remove("selected");
//         // tally = ?;
//     // document.body.children[X].textContent = 0;