import { GameHistory } from '../Game.types';

export type HistoryProps = {
  currentTurn: number;
  gridSize: number;
  history: GameHistory;
  setCurrentTurn: (value: number) => void;
}
