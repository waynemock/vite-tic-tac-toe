import './Game.css'
import {
  FunctionComponent,
  useMemo,
  useState,
} from 'react';
import { Board } from './Board.component';
import { GameHistory } from './Game.types';
import { BoardGrid } from './Board.types';

export const Game: FunctionComponent = () => {
  const [history, setHistory] = useState<GameHistory>([{ board: [], playedSquare: -1}]);
  const [currentTurn, setCurrentTurn] = useState(0);

  const takeTurn = (newBoard: BoardGrid, square: number) => {
    setHistory([...history.slice(0, currentTurn + 1), {
      board: newBoard,
      playedSquare: square,
    }]);
    setCurrentTurn(currentTurn + 1);
  }

  const historyList = useMemo(() => history.map((item, index) => {
    const className = currentTurn === index ? 'highlight' : '';
    const player = index % 2 ? 'X' : 'O';
    const turn = `${player} played (${(Math.floor(item.playedSquare / 3)) + 1}, ${(item.playedSquare % 3) + 1})`;

    let label = 'Restart game';
    if (index) {
      label = index === currentTurn ? `Current turn #${index}: ${turn}` : `Go to turn #${index}: ${turn}`;
    }

    return (
      <li key={index}>
        <button className={className} onClick={() => setCurrentTurn(index)}>{label}</button>
      </li>
    )
  }), [currentTurn, history]);

  return (
    <div className="game">
      <div className="game-board">
        <Board board={history[currentTurn]?.board} currentTurn={currentTurn} takeTurn={takeTurn} />
      </div>
      <div className="game-info">
        <ul>{historyList}</ul>
      </div>
    </div>
  )
}