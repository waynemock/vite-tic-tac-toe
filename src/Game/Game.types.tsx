import { BoardGrid } from './Board.types';

export type GameHistoryItem = {
  board: BoardGrid;
  playedSquare: number;
};

export type GameHistory = Array<GameHistoryItem>;
