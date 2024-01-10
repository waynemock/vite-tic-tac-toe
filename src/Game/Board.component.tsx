import {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { Square } from './Square.component'
import { BoardGrid, BoardProps, BoardResults } from './Board.types';

export const Board: FunctionComponent<BoardProps> = (props) => {
  const {
    board,
    currentTurn,
    takeTurn,
  } = props;
  const [status, setStatus] = useState("X's turn");
  const [results, setResults] = useState<BoardResults>();

  const currentPiece = currentTurn % 2 ? 'O' : 'X';

  const updateStatus = useCallback(() => {
    const results = computeWinner(board);
    let status = currentPiece === 'X' ? "X's turn" : "O's turn";
    if (results) {
      status = `${results.winner} wins!`;
    } else if (currentTurn === 9) {
      status = "Game ended in a tie!";
    }
    setStatus(status);
    setResults(results);
  }, [board, currentPiece, currentTurn]);

  const onClick = (index: number) => {
    if (board[index] || results) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = currentPiece;
    takeTurn(newBoard, index);
    updateStatus();
  }

  useEffect(() => {
    updateStatus();
  }, [board, updateStatus]);

  const isSquareWinner = (index: number): boolean => !!results?.line.includes(index);
  const rows = [0,1,2];

  return (
    <>
      <div className='header'>
        {status}
      </div>
      {rows.map((row) => (
        <div className='board-row' key={`r${row}`}>
          {rows.map((column) => {
            const index = (row * rows.length) + column;
            return <Square key={`sq${index}`} isWinner={isSquareWinner(index)} value={board[index]} onClick={() => onClick(index)} />;
          })}
        </div>
      ))}
    </>
  )
}

const computeWinner = (board: BoardGrid): BoardResults | undefined => {
  const lines = [
    [0, 1, 2],  // rows
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],  // columns
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],  // diagonals
    [2, 4, 6]
  ];

  for (let index = 0; index < lines.length; index++) {
    const [a, b, c] = lines[index];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      // winner!
      return {
        winner: board[a],
        line: lines[index],
      };
    }
  }
  // no winner
  return undefined;
}
