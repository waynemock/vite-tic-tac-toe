import { cloneDeep } from 'lodash';
import './Game.css'
import {
  FunctionComponent,
  useEffect,
  useState,
} from 'react';
import { Board } from './Board/Board.component';
import { GameHistory } from './Game.types';
import { BoardGrid, BoardGridItemIndex } from './Board/Board.types';
import { History } from './History/History.component';
import { gameConstants } from './Game.constants';
import { GridSizeSelect } from './GridSizeSelect/GridSizeSelect.component';
import { gameUtils } from './utils';

export const Game: FunctionComponent = () => {
  const [gridSize, setGridSize] = useState(gameConstants.defaultGridSize);
  const [history, setHistory] = useState<GameHistory>([{ board: gameUtils.initBoard(gridSize)}]);
  const [currentTurn, setCurrentTurn] = useState(0);

  useEffect(() => {
    if (gridSize !== history[0].board.length) {
      setCurrentTurn(0);
      setHistory([{ board: gameUtils.initBoard(gridSize)}])
    }
  }, [gridSize, history]);

  const takeTurn = (newBoard: BoardGrid, square: BoardGridItemIndex) => {
    const newHistory = cloneDeep(history.slice(0, currentTurn + 1));
    setHistory([...newHistory, {
      board: cloneDeep(newBoard),
      playedSquare: square,
    }]);
    setCurrentTurn(currentTurn + 1);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          board={cloneDeep(history[currentTurn].board)}
          currentTurn={currentTurn}
          takeTurn={takeTurn}
        />
        <GridSizeSelect
          defaultValue={gameConstants.defaultGridSize}
          setGridSize={setGridSize}
        />
      </div>
      <History
        currentTurn={currentTurn}
        gridSize={gridSize}
        history={history}
        setCurrentTurn={setCurrentTurn}
      />
    </div>
  )
}