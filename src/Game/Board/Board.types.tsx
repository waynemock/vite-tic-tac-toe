export type BoardGridItem = string | undefined;
export type BoardGridItemIndex = [row: number, column: number];

export type BoardGridRow = Array<BoardGridItem>;
export type BoardGrid = Array<BoardGridRow>;

export type BoardResults = {
  winner: BoardGridItem;
  line: Array<number>;
}

export type BoardProps = {
  board: BoardGrid;
  currentTurn: number;
  takeTurn: (nextBoard: BoardGrid, square: BoardGridItemIndex) => void;
}
