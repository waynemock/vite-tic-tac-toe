export type BoardGrid = Array<string>;

export type BoardResults = {
  winner: string;
  line: Array<number>;
}

export type BoardProps = {
  board: BoardGrid;
  currentTurn: number;
  takeTurn: (nextBoard: BoardGrid, square: number) => void;
}
