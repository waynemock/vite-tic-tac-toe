import {
  BoardGrid,
  BoardGridItemIndex,
} from './Board/Board.types';

export type GameHistoryItem = {
  board: BoardGrid;
  playedSquare?: BoardGridItemIndex;
};

export type GameHistory = Array<GameHistoryItem>;
