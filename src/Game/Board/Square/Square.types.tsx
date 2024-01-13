import { BoardGridItem } from '../Board.types';

export type SquareProps = {
  isWinner: boolean;
  onClick: () => void
  value: BoardGridItem;
}
