import { FunctionComponent } from 'react'
import { SquareProps } from './Square.types'

export const Square: FunctionComponent<SquareProps> = (props) => {
  const {
    isWinner,
    onClick,
    value = ' ',
  } = props;

  return (
    <button
      className='square'
      onClick={() => onClick()}
    >
      <div className={`${isWinner ? 'highlight' : ''}`}>{value}</div>
    </button>
  );
}