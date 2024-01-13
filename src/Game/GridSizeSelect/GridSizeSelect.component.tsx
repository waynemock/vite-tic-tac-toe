import './GridSizeSelect.css';
import { FunctionComponent } from 'react';
import { GridSizeSelectProps } from './GridSizeSelect.types';

export const GridSizeSelect: FunctionComponent<GridSizeSelectProps> = (props) => {
  const {
    defaultValue,
    setGridSize,
  } = props;

  return (
    <div className='gridSizeSelect'>
        <label htmlFor="size-select">Size: </label>
        <select
          defaultValue={defaultValue}
          name="sizes"
          id="size-select"
          onChange={(e) => { setGridSize(Number(e.target.value))}}
        >
          {[1, 2, 3, 4, 5, 6].map((size) => <option key={size} value={size}>{size}</option>)}
        </select>
    </div>
    );
}