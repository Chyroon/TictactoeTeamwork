const prompt = require("prompt-sync")();
const boardFunc = require("./board");

function isCoordinateTaken(userImput,board) {
  if ((userImput == "A1" && board[0][0]) == "." ||
      (userImput == "A2" && board[0][1]) == "." ||
      (userImput == "A3" && board[0][2]) == "." ||
      (userImput == "B1" && board[1][0]) == "." ||
      (userImput == "B2" && board[1][1]) == "." ||
      (userImput == "B3" && board[1][2]) == "." ||
      (userImput == "C1" && board[2][0]) == "." ||
      (userImput == "C2" && board[2][1]) == "." ||
      (userImput == "C3" && board[2][2]) == ".") {
    return false;  
  }
  return true;
}

function getRandomNumber(max) {
  return Math.floor(Math.random() *max);
}

function mapRandomCoordinatToUserImput(coordinates) {
  if (coordinates == [0, 0]) {
    return "A1";
  } else if (coordinates == [0, 1]) {
    return "A2";
  } else if (coordinates == [0, 2]) {
    return "A3";
  } else if (coordinates == [1, 0]) {
    return "B1";
  } else if (coordinates == [1, 1]) {
    return "B2";
  } else if (coordinates == [1, 2]) {
    return "B3";
  } else if (coordinates == [2, 0]) {
    return "C1";
  } else if (coordinates == [2, 1]) {
    return "C2";
  } else if (coordinates == [2, 2]) {
    return "C3";
  }
}


module.exports = {
  getPlayerMove: function (board, current_player) {
    let validCoordinates = ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"]
    let qestion = `${current_player} Choose your Field: `
    let userImput = prompt(qestion)
    while ((!validCoordinates.includes(userImput)) || (isCoordinateTaken(userImput, board))) {
      console.log("Error!")
      userImput = prompt(qestion);
      if (userImput.toLowerCase() == "quit") {
      return null;
      }
    }

    if (userImput == "A1") {
      return [0, 0];
    } else if (userImput == "A2") {
      return [0, 1];
    } else if (userImput == "A3") {
      return [0, 2];
    } else if (userImput == "B1") {
      return [1, 0];
    } else if (userImput == "B2") {
      return [1, 1];
    } else if (userImput == "B3") {
      return [1, 2];
    } else if (userImput == "C1") {
      return [2, 0];
    } else if (userImput == "C2") {
      return [2, 1];
    } else if (userImput == "C3") {
      return [2, 2];
    }
    //return userImput;
  },


  /*
      Should return the read coordinates for the tic tac toe board from the terminal.
      The coordinates should be in the format  letter, number where the letter is 
      A, B or C and the number 1, 2 or 3.
      If the user enters an invalid coordinate (like Z0 or 1A, A11, sadfdsaf) 
      than a warning message should appear and the coordinates reading process repeated.
      If the user enters a coordinate that is already taken on the board.
      than a warning message should appear and the coordinates reading process repeated.
      If the user enters the word "quit" in any format of capitalized letters the program
      should stop.
      */
  

  getRandomAiCoordinates: function (board, current_player) {
    let max = 3;
    let coordinates = [getRandomNumber(max), getRandomNumber(max)];
    while (!(isCoordinateTaken(mapRandomCoordinatToUserImput(coordinates),board))) {
      coordinates = [getRandomNumber(max), getRandomNumber(max)];
    }
    return coordinates;
  },


  /*
      Should return a tuple of 2 numbers. 
      Each number should be between 0-2.
      The chosen number should be only a free coordinate from the board.
      If the board is full (all spots taken by either X or O) than "None"
      should be returned.
      */
  

  getUnbeatableAiCoordinates: function (board, current_player) {

    let enemyPlayer = ""
     if(current_player == "X"){
      enemyPlayer = "O"
     }
     else{
      enemyPlayer = "X"
     }

     for(i = 0 ; i < 3 ; i++){
        for(j = 0 ; j < 3 ; j++){
          if(!(board[i][j] == "X" || board[i][j] == "O" )){
            board[i][j] = current_player
            if(boardFunc.getWinningPlayerAI(board) == current_player){
            return [i , j ]
            }
            
            board[i][j] = "."
          }
        }
      }

      for(i = 0 ; i < 3 ; i ++){
          for(j = 0 ; j < 3 ; j ++){
            if(!(board[i][j] == "X" || board[i][j] == "O")){
              board[i][j] = enemyPlayer
              if(boardFunc.getWinningPlayerAI(board) == enemyPlayer){
                return[i , j ]
              }
              
              board[i][j] = "."
            }
          }
      }
      
      return this.getRandomAiCoordinates(board , current_player)
  },
};


    /*
        Should return an array of 2 numbers. 
        Each number should be between 0-2.
        The chosen number should be only a free coordinate from the board.
        The chosen coordinate should always stop the other player from winning or
        maximize the current player's chances to win.
        If the board is full (all spots taken by either X or O) than "None"
        should be returned.
        */

// run this function to test whether you have correctly implemented the other functions
function checkCoordinates() {
  board_1 = [
    ["X", "X", "."],
    ["X", ".", "."],
    ["X", "X", "."],
  ];
  console.log(
    "It should console.log the coordinates selected by the human player"
  );
  coordinates = module.exports.getPlayerMove(board_1, "X");
  console.log(coordinates);

  board_2 = [
    ["O", "O", "."],
    ["X", "O", "."],
    ["X", "X", "O"],
  ];
  console.log("The console.loged coordinate should be only (0,2) or (1,2)");
  console.log(module.exports.getRandomAiCoordinates(board_2));
  console.log("The console.loged coordinate should be only (0,2) or (1,2)");
  console.log(module.exports.getRandomAiCoordinates(board_2));
  console.log("The console.loged coordinate should be only (0,2) or (1,2)");
  console.log(module.exports.getRandomAiCoordinates(board_2));

  board_3 = [
    ["O", "X", "X"],
    ["X", "O", "X"],
    ["X", "O", "X"],
  ];
  console.log("The console.loged coordinate should be None");
  console.log(module.exports.getRandomAiCoordinates(board_3));

  board_4 = [
    [".", "O", "."],
    ["X", "O", "."],
    ["X", "X", "O"],
  ];
  console.log("The console.loged coordinate should always be (0, 0)");
  console.log(module.exports.getUnbeatableAiCoordinates(board_4, "X"));

  board_5 = [
    ["X", "O", "."],
    ["X", ".", "."],
    ["O", "O", "X"],
  ];
  console.log("The console.loged coordinate should always be (1, 1)");
  console.log(module.exports.getUnbeatableAiCoordinates(board_5, "O"));

  board_6 = [
    ["O", "O", "."],
    ["O", "X", "."],
    [".", "X", "."],
  ];
  console.log("The console.loged coordinate should either (0, 2) or (2, 0)");
  console.log(module.exports.getUnbeatableAiCoordinates(board_6));
}


