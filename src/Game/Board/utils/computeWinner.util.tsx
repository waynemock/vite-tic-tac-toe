import { BoardGrid, BoardResults } from '../Board.types';

/**
 * Returns a `BoardResults` object determining if and who won the game of tic-tac-toe.
 * Returns `undefined` if no winner
 *
 * @param board - a non-sparse NxN 2 dimensional array of BoardGridItems
 * @returns BoardResults
 */
export const computeWinner = (board: BoardGrid): BoardResults | undefined => {
  // Check all rows and columns
  for (let index = 0; index < board.length; index++) {
    // Check row
    let winner = board[index][0];
    let line: BoardResults['line'] = [];
    if (board[index].every((column, columnIndex) => {
      line.push(index * board.length + columnIndex)
      return winner && column === winner
    })) {
      // Row `index is a winner
      return {
          winner,
          line,
        };
    }
    // Check column
    winner = board[0][index];
    line = [];
    if (board.every((row, rowIndex) => {
      line.push(index + (rowIndex * board.length))
      return winner && row[index] === winner;
    })) {
      // column `index is a winner
      return {
        winner,
        line,
      };
    }
  }

  // Check upper left to lower right diagonal
  let winner = board[0][0];
  let line: BoardResults['line'] = [];
  if (board.every((row, index) => {
    line.push(index + (index * board.length));
    return winner && row[index] === winner;
  })) {
      // Upper left to lower right diagonal is a winner
      return {
        winner,
        line,
      };
  }

  // Check upper right to lower left diagonal
  winner = board[0][board.length - 1];
  line = [];
  if (board.every((row, index) => {
    line.push((index * board.length) + board.length - 1 - index)
    return winner && row[board.length - 1 - index] === winner;
  })) {
      // Upper right to lower left diagonal is a winner
      return {
        winner,
        line,
      };
  }

  // No winner found
  return undefined;
}
