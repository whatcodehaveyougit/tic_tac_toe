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
      activePlayer: "X"
    };
    this.nodemonBanana = this.takeSquare.bind(this);
    this.resetBoard = this.resetBoard.bind(this);
    this.checkForWinner = this.checkForWinner.bind(this);
    this.checkForWinner = this.checkForWinner.bind(this);
  }

  winningMessageForX(){
    // const winner = this.state.activePlayer
    // document.getElementById("heading").innerHTML = "Player " + winner + " wins!"
    document.getElementById("heading").innerHTML = "Player X wins!"

  }

  winningMessageForO(){
    document.getElementById("heading").innerHTML = "Player O wins!"
  }


  checkForWinner(){
    if (this.state.board[0].value && this.state.board[1].value && this.state.board[2].value === "X"){
      this.winningMessageForX();
    } else if
    (this.state.board[3].value && this.state.board[4].value && this.state.board[5].value === "X"){
      this.winningMessageForX();
    } else if
    (this.state.board[6].value && this.state.board[7].value && this.state.board[8].value === "X"){
      this.winningMessageForX();
    } else if
    (this.state.board[0].value && this.state.board[3].value && this.state.board[6].value === "X"){
      this.winningMessageForX();
    } else if
    (this.state.board[1].value && this.state.board[4].value && this.state.board[7].value === "X"){
      this.winningMessageForX();
    } else if
    (this.state.board[2].value && this.state.board[5].value && this.state.board[8].value === "X"){
      this.winningMessageForX();
    } else if
    (this.state.board[6].value && this.state.board[4].value && this.state.board[2].value === "X"){
      this.winningMessageForX();
    } else if
    (this.state.board[0].value && this.state.board[4].value && this.state.board[8].value === "X"){
      this.winningMessageForX();
    } else if (this.state.board[0].value && this.state.board[1].value && this.state.board[2].value === "O"){
      this.winningMessageForO();
    } else if
    (this.state.board[3].value && this.state.board[4].value && this.state.board[5].value === "O"){
      this.winningMessageForO();
    } else if
    (this.state.board[6].value && this.state.board[7].value && this.state.board[8].value === "O"){
      this.winningMessageForO();
    } else if
    (this.state.board[0].value && this.state.board[3].value && this.state.board[6].value === "O"){
      this.winningMessageForO();
    } else if
    (this.state.board[1].value && this.state.board[4].value && this.state.board[7].value === "O"){
      this.winningMessageForO();
    } else if
    (this.state.board[2].value && this.state.board[5].value && this.state.board[8].value === "O"){
      this.winningMessageForO();
    } else if
    (this.state.board[6].value && this.state.board[4].value && this.state.board[2].value === "O"){
      this.winningMessageForO();
    } else if
    (this.state.board[0].value && this.state.board[4].value && this.state.board[8].value === "O"){
      this.winningMessageForO();
    } else {
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
    this.setState({ board: boardArray });
    this.addCrossOrNought(squareId)
    this.checkForWinner()
  }

  changeActivePlayer() {
    if (this.state.activePlayer === "X") {
      this.setState({ activePlayer: "O" });
    } else {
      this.setState({ activePlayer: "X" });
    }
  }

  
 

  addCrossOrNought(squareId) {
    this.state.board.forEach(square => {
      if (square.id === squareId) {
        if (this.activePlayer === "X") {
          return <p> {this.activePlayer === "X" ? "x" : "o"} </p>;
        }
      }
    });
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
