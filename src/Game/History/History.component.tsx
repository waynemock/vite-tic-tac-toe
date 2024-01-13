import { FunctionComponent, useMemo } from 'react';
import { HistoryProps } from './History.types';

export const History: FunctionComponent<HistoryProps> = (props) => {
  const {
    currentTurn,
    history,
    gridSize,
    setCurrentTurn,
  } = props;

  const historyList = useMemo(() => history.map((item, index) => {
    const className = currentTurn === index ? 'historyButton highlight' : 'historyButton';
    const player = index % 2 ? 'X' : 'O';
    let turn = 'unknown';
    if (item.playedSquare) {
      const [row, column] = item.playedSquare;
      turn = `: ${player} played (${(row) + 1}, ${(column % gridSize) + 1})`;
    }

    let label = 'Restart game';
    if (index) {
      label = index === currentTurn ? `Current turn #${index}: ${turn}` : `Go to turn #${index}: ${turn}`;
    }

    return (
      <li key={index}>
        <button className={className} onClick={() => setCurrentTurn(index)}>{label}</button>
      </li>
    )
  }), [currentTurn, gridSize, history, setCurrentTurn]);

  return (
    <div className="game-info">
      <ul>{historyList}</ul>
    </div>
  );
}