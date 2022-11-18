module.exports = {
  getEmptyBoard: function () {
    return [[".",".","."],[".",".","."],[".",".","."]];
  },  
    /*
        Should return a list with 3 sublists.
        Each sublist should contain 3 time the "." character
        */
  

  displayBoard: function (board) {
    console.log("        " + "1" + "   2   " +  "3\n" +
            "    A   " + board[0][0] + " | " + board[0][1] + " | " + board[0][2] + "\n" +
            "       ---+---+--- \n" +
            "    B   " + board[1][0] + " | " + board[1][1] + " | " + board[1][2] + "\n" +
            "       ---+---+--- \n" +
            "    C   " + board[2][0] + " | " + board[2][1] + " | " + board[2][2] + "\n"
            )
  },

    /*
        Should console.log the tic tac toe board in a format similar to
            1   2   3
            A   X | O | . 
            ---+---+---
            B   X | O | .
            --+---+---
            C   0 | X | . 
            --+---+---
        */
  

  isBoardFull: function (board) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] == ".") {
          return false;
        }
      }
    }
    return true;
  },

    /*
        should return True if there are no more empty place on the board,
        otherwise should return False
        */
  

  getWinningPlayer: function (board) {
    let winner = ""
    if (board[0][0] == board[0][1] && board[0][0] == board[0][2] && board[0][0] == "X") {
      winner = "X";
    } else if (board[0][0] == board[0][1] && board[0][0] == board[0][2] && board[0][0] == "O") {
      winner = "O";
    } else if (board[1][0] == board[1][1] && board[1][0] == board[1][2] && board[1][0] == "X") {
      winner = "X";
    } else if (board[1][0] == board[1][1] && board[1][0] == board[1][2] && board[1][0] == "O") {
      winner = "O";
    } else if (board[2][0] == board[2][1] && board[2][0] == board[2][2] && board[2][0] == "X") {
      winner = "X";
    } else if (board[2][0] == board[2][1] && board[2][0] == board[2][2] && board[2][0] == "O") {
      winner = "O"; // horizontal
    } else if (board[0][0] == board[1][0] && board[0][0] == board[2][0] && board[0][0] == "X") {
      winner = "X";
    } else if (board[0][0] == board[1][0] && board[0][0] == board[2][0] && board[0][0] == "O") {
      winner = "O";
    } else if (board[0][1] == board[1][1] && board[0][1] == board[2][1] && board[0][1] == "X") {
      winner = "X";
    } else if (board[0][1] == board[1][1] && board[0][1] == board[2][1] && board[0][1] == "O") {
      winner = "O";
    } else if (board[0][2] == board[1][2] && board[0][2] == board[2][2] && board[0][2] == "X") {
      winner = "X";
    } else if (board[0][2] == board[1][2] && board[0][2] == board[2][2] && board[0][2] == "O") {
      winner = "O"; // vertical
    } else if (board[0][0] == board[1][1] && board[0][0] == board[2][2] && board[0][0] == "X") {
      winner = "X"; 
    } else if (board[0][0] == board[1][1] && board[0][0] == board[2][2] && board[0][0] == "O") {
      winner = "O";
    } else if (board[0][2] == board[1][1] && board[0][2] == board[2][0] && board[0][2] == "X") {
      winner = "X";
    } else if (board[0][2] == board[1][1] && board[0][2] == board[2][0] && board[0][2] == "O") {
      winner = "O"; // diagonal
    } else {
      return "None";
    }

    if (winner !== "") {
      console.log("The winner is: " + winner + "!")
    }

    return winner;
  },

  getWinningPlayerAI: function (board) {
    let winner = ""
    if (board[0][0] == board[0][1] && board[0][0] == board[0][2] && board[0][0] == "X") {
      winner = "X";
    } else if (board[0][0] == board[0][1] && board[0][0] == board[0][2] && board[0][0] == "O") {
      winner = "O";
    } else if (board[1][0] == board[1][1] && board[1][0] == board[1][2] && board[1][0] == "X") {
      winner = "X";
    } else if (board[1][0] == board[1][1] && board[1][0] == board[1][2] && board[1][0] == "O") {
      winner = "O";
    } else if (board[2][0] == board[2][1] && board[2][0] == board[2][2] && board[2][0] == "X") {
      winner = "X";
    } else if (board[2][0] == board[2][1] && board[2][0] == board[2][2] && board[2][0] == "O") {
      winner = "O"; // horizontal
    } else if (board[0][0] == board[1][0] && board[0][0] == board[2][0] && board[0][0] == "X") {
      winner = "X";
    } else if (board[0][0] == board[1][0] && board[0][0] == board[2][0] && board[0][0] == "O") {
      winner = "O";
    } else if (board[0][1] == board[1][1] && board[0][1] == board[2][1] && board[0][1] == "X") {
      winner = "X";
    } else if (board[0][1] == board[1][1] && board[0][1] == board[2][1] && board[0][1] == "O") {
      winner = "O";
    } else if (board[0][2] == board[1][2] && board[0][2] == board[2][2] && board[0][2] == "X") {
      winner = "X";
    } else if (board[0][2] == board[1][2] && board[0][2] == board[2][2] && board[0][2] == "O") {
      winner = "O"; // vertical
    } else if (board[0][0] == board[1][1] && board[0][0] == board[2][2] && board[0][0] == "X") {
      winner = "X"; 
    } else if (board[0][0] == board[1][1] && board[0][0] == board[2][2] && board[0][0] == "O") {
      winner = "O";
    } else if (board[0][2] == board[1][1] && board[0][2] == board[2][0] && board[0][2] == "X") {
      winner = "X";
    } else if (board[0][2] == board[1][1] && board[0][2] == board[2][0] && board[0][2] == "O") {
      winner = "O"; // diagonal
    } else {
      return "None";
    }

    

    return winner;
  },
};




    /*
      Should return the player that wins based on the tic tac toe rules.
      If no player has won, than "None" is returned.
      */
  


// run this function to test whether you have correctly implemented the other function
  function checkBoards() {
    let board = module.exports.getEmptyBoard();
    console.log(board);

    board = [["X", "O", "."], ["X", "O", "."], ["0", "X", "."]];

    console.log(`Should give out:"

          1   2   3
      A   X | O | . 
        ---+---+---
      B   X | O | .
        ---+---+---
      C   0 | X | . 
        ---+---+---`);
    module.exports.displayBoard(board);

    board_1 = [
      ["X", "O", "."],
      ["X", "O", "."],
      ["X", "X", "O"],
    ];
    console.log("Should return False");
    console.log(module.exports.isBoardFull(board_1));

    board_2 = [
      [".", "O", "O"],
      [".", "O", "X"],
      [".", "X", "X"],
    ];
    console.log("Should return False");
    console.log(module.exports.isBoardFull(board_2));

    board_3 = [
      ["O", "O", "X"],
      ["O", "X", "O"],
      ["O", "X", "X"],
    ];
    console.log("Should return True");
    console.log(module.exports.isBoardFull(board_3));

    board_4 = [
      ["X", "O", "."],
      ["X", "O", "."],
      ["X", "X", "O"],
    ];
    console.log("Should return X");
    console.log(module.exports.getWinningPlayer(board_4));

    board_5 = [
      ["X", "O", "O"],
      ["X", "O", "."],
      ["O", "X", "X"],
    ];
    console.log("Should return O");
    console.log(module.exports.getWinningPlayer(board_5));

    board_6 = [
      ["O", "O", "."],
      ["O", "X", "."],
      [".", "X", "."],
    ];
    console.log("Should return None");
    console.log(module.exports.getWinningPlayer(board_6));
  }


