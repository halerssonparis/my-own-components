import { useState, useEffect } from "react";
import styles from "../styles/tic-tac-toe.module.css";
import { v4 as uuid } from "uuid";

function createBoard(n) {
  const board = [];

  for (let i = 0; i < n; i++) {
    board.push([]);
    for (let j = 0; j < n; j++) {
      board[i].push([]);
    }
  }

  return board;
}

const N = 3;

const GameTicTacToe = () => {
  const [board, setBoard] = useState(createBoard(N));
  const style = { "--board-size": N } as React.CSSProperties;
  const [isPlayer1, setIsPlayer1] = useState(true);

  function add(x, y) {
    //validate 
    
    const tmpBoard = structuredClone(board);

    tmpBoard[x][y] = isPlayer1 ? "X" : "O";

    setBoard(tmpBoard);
    
    setIsPlayer1((prev) => !prev);

    checkWinner();
  }

  function checkWinner() {

  }

  useEffect(() => {
    console.log(board);
  });

  function getBoard() {
    return board.map((row, rowIndex) => {
      return (
        <div key={uuid()} className={styles.row}>
          {row.map((column, columnIndex) => {
            return (
              <div
                key={uuid()}
                className={styles.column}
                onClick={() => add(rowIndex, columnIndex)}
              >
                {column}
              </div>
            );
          })}
        </div>
      );
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.board} style={style}>
        {getBoard()}
      </div>
    </div>
  );
};

export default GameTicTacToe;
