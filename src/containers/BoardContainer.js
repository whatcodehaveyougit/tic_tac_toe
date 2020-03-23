import React, { Component, Fragment } from "react";
import Square from "../components/Square.js";
import "./BoardContainer.css";
import "../components/Square.css";

class BoardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board: [
        { id: 1, value: null },
        { id: 2, value: null },
        { id: 3, value: null },
        { id: 4, value: null },
        { id: 5, value: null },
        { id: 6, value: null },
        { id: 7, value: null },
        { id: 8, value: null },
        { id: 9, value: null }
      ],
      activePlayer: "X",
    };
    this.nodemonBanana = this.takeSquare.bind(this);
    this.resetBoard = this.resetBoard.bind(this);
    this.checkForWinner = this.checkForWinner.bind(this);
    this.checkForWinner = this.checkForWinner.bind(this);
  }

  winningMessageFor(winner) {
    document.getElementById("heading").innerHTML = `Player ${winner} wins!`
  }

  allSqauresSame(squares){
     return squares.every((sq, i, squares) => sq.value === this.state.activePlayer)
  }

  checkForWinner(){
    if (this.allSqauresSame(this.state.board.slice(0, 3))){
      const winner = this.state.board[0].value; 
      this.winningMessageFor(winner)
     } else if 
    (this.allSqauresSame(this.state.board.slice(3, 6))){
      const winner = this.state.board[3].value; 
      this.winningMessageFor(winner)   
    } else if 
    (this.allSqauresSame(this.state.board.slice(6, 9))){
      const winner = this.state.board[6].value; 
      this.winningMessageFor(winner)    
    } else if 
    (this.allSqauresSame([this.state.board[0], this.state.board[3], this.state.board[6]])){
      const winner = this.state.board[0].value; 
      this.winningMessageFor(winner)    
    }  else if 
    (this.allSqauresSame([this.state.board[1], this.state.board[4], this.state.board[7]])){
      const winner = this.state.board[1].value; 
      this.winningMessageFor(winner)    
    }  else if 
    (this.allSqauresSame([this.state.board[2], this.state.board[5], this.state.board[8]])){
      const winner = this.state.board[2].value; 
      this.winningMessageFor(winner)    
    }  else if 
    (this.allSqauresSame([this.state.board[0], this.state.board[4], this.state.board[8]])){
      const winner = this.state.board[0].value; 
      this.winningMessageFor(winner)    
    }  else if 
    (this.allSqauresSame([this.state.board[2], this.state.board[4], this.state.board[6]])){
      const winner = this.state.board[2].value; 
      this.winningMessageFor(winner)    
    }  
    else {
      this.changeActivePlayer()
    }
  }

  takeSquare(squareId) {
    const boardArray = this.state.board.map(square => {
      if (square.id === squareId) {
        return { id: square.id, value: this.state.activePlayer };
      } else {
        return square;
      }
    });
    this.setState({ board: boardArray }, () => {
      this.checkForWinner()
    });
  }

  changeActivePlayer() {
    if (this.state.activePlayer === "X") {
      this.setState({ activePlayer: "O" });
    } else {
      this.setState({ activePlayer: "X" });
    }
  }

  resetBoard(){
    const boardArray = this.state.board.map(square => {
      if (square.value != null) {
        return { id: square.id, value: null };
      } else {
        return square
      }
    });
    this.setState({ board: boardArray });
    document.getElementById("heading").innerHTML = "TicTacToe"
  }

  render() {
    return (
      <Fragment>
        <h1 id="heading">TicTacToe</h1>
        <section className="board">
          <Square
            square={this.state.board[0]}
            onSquareSelected={this.nodemonBanana}
          />
          <Square
            square={this.state.board[1]}
            onSquareSelected={this.nodemonBanana}
          />
          <Square
            square={this.state.board[2]}
            onSquareSelected={this.nodemonBanana}
          />
          <Square
            square={this.state.board[3]}
            onSquareSelected={this.nodemonBanana}
          />
          <Square
            square={this.state.board[4]}
            onSquareSelected={this.nodemonBanana}
          />
          <Square
            square={this.state.board[5]}
            onSquareSelected={this.nodemonBanana}
          />
          <Square
            square={this.state.board[6]}
            onSquareSelected={this.nodemonBanana}
          />
          <Square
            square={this.state.board[7]}
            onSquareSelected={this.nodemonBanana}
          />
          <Square
            square={this.state.board[8]}
            onSquareSelected={this.nodemonBanana}
          /> 
        </section>
        <button className="new-game" onClick={this.resetBoard}>Start New Game</button>  
      </Fragment>
    );
  }
}

export default BoardContainer;
