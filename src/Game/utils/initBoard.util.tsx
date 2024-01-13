import {
  BoardGrid,
  BoardGridRow,
  BoardGridItem,
} from '../Board/Board.types';

export const initBoard = (n: number): BoardGrid => {
  const board = Array<BoardGridRow>(n);
  for (let index = 0; index < n; index++) {
    board[index] = Array<BoardGridItem>(n).fill(undefined, 0, n);
  }
  return board;
}
