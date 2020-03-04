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
    // this.changeActivePlayer = this.changeActivePlayer.bind(this);
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
    this.addCrossOrNought(squareId);
    this.changeActivePlayer();
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

  render() {
    return (
      <Fragment>
        <h1>TicTacToe</h1>
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
      </Fragment>
    );
  }
}

export default BoardContainer;
