import React from "react";
import Square from "../Square/Square";
import { BoardWrapper, Columns, Rows } from "./BoardStyled";

class Board extends React.Component {
  createBoard = () => {
    let rows = [];
    let squaresCounter = 0;
    for (let row = 0; row < 3; row++) {
      let squaresInRow = [];
      for (let square = 0; square < 3; square++) {
        squaresInRow.push(this.renderSquare(squaresCounter));
        squaresCounter++;
      }
      rows.push(
        <div className="board-row" key={row}>
          {squaresInRow}
        </div>
      );
    }
    return rows;
  };

  renderSquare(i) {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div key="uniq">
        <Columns>
          <div id="columns" key="1">
            1
          </div>
          <div id="columns" key="2">
            2
          </div>
          <div id="columns" key="3">
            3
          </div>
        </Columns>
        <Rows>
          <div id="rowsNumber" key="a">
            a
          </div>
          <div id="rowsNumber" key="b">
            b
          </div>
          <div id="rowsNumber" key="c">
            c
          </div>
        </Rows>
        <BoardWrapper>{this.createBoard()}</BoardWrapper>
      </div>
    );
  }
}
export default Board;
