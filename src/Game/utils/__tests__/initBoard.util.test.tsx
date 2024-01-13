import { initBoard } from '../initBoard.util'

const mocks = {
  n1x1: {
    board: [
      [undefined],
    ],
  },
  n2x2: {
    board: [
      [undefined, undefined],
      [undefined, undefined],
    ],
  },
  n3x3: {
    board: [
      [undefined, undefined, undefined],
      [undefined, undefined, undefined],
      [undefined, undefined, undefined],
    ],
  },
  n4x4: {
    board: [
      [undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined],
    ],
  },
  n5x5: {
    board: [
      [undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined],
    ],
  },
}

describe("initBoard", () => {
  Object.entries(mocks).forEach(([mockKey, mock]) => {
    test(`${mockKey}`, () => {
      expect(initBoard(mock.board.length)).toStrictEqual(mock.board);
    })
  })
})