import { computeWinner } from '../computeWinner.util'

const mocks = {
  n3x3: {
    empty: {
      board: [
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
      ],
      winner: undefined,
    },
    inProgress: {
      board: [
        ['x', undefined, undefined],
        [undefined, 'o', undefined],
        [undefined, undefined, undefined],
      ],
      winner: undefined,
    },
    tie: {
      board: [
        ['x', 'o', 'x'],
        ['x', 'o', 'o'],
        ['o', 'x', 'x'],
      ],
      winner: undefined,
    },
    firstRow: {
      board: [
        ['x', 'x', 'x'],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
      ],
      winner: {
        winner: 'x',
        line: [0,1,2],
      },
    },
    secondRow: {
      board: [
        [undefined, undefined, undefined],
        ['x', 'x', 'x'],
        [undefined, undefined, undefined],
      ],
      winner: {
        winner: 'x',
        line: [3,4,5],
      },
    },
    thirdRow: {
      board: [
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
        ['x', 'x', 'x'],
      ],
      winner: {
        winner: 'x',
        line: [6,7,8],
      },
    },
    firstCol: {
      board: [
        ['x', undefined, undefined],
        ['x', undefined, undefined],
        ['x', undefined, undefined],
      ],
      winner: {
        winner: 'x',
        line: [0,3,6],
      },
    },
    secondCol: {
      board: [
        [undefined, 'x', undefined],
        [undefined, 'x', undefined],
        [undefined, 'x', undefined],
      ],
      winner: {
        winner: 'x',
        line: [1,4,7],
      },
    },
    thirdCol: {
      board: [
        [undefined, undefined, 'x'],
        [undefined, undefined, 'x'],
        [undefined, undefined, 'x'],
      ],
      winner: {
        winner: 'x',
        line: [2,5,8],
      },
    },
    diagLR: {
      board: [
        ['x', undefined, undefined],
        [undefined, 'x', undefined],
        [undefined, undefined, 'x'],
      ],
      winner: {
        winner: 'x',
        line: [0,4,8],
      },
    },
    diagRL: {
      board: [
        [undefined, undefined, 'x'],
        [undefined, 'x', undefined],
        ['x', undefined, undefined],
      ],
      winner: {
        winner: 'x',
        line: [2,4,6],
      },
    },
  },
  n4x4: {
    empty: {
      board: [
        [undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined],
      ],
      winner: undefined,
    },
    inProgress: {
      board: [
        ['x', undefined, undefined, undefined],
        [undefined, 'o', undefined, undefined],
        [undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined],
      ],
      winner: undefined,
    },
    tie: {
      board: [
        ['x', 'o', 'x', 'o'],
        ['x', 'o', 'o', 'x'],
        ['o', 'x', 'x', 'o'],
        ['o', 'x', 'x', 'o'],
      ],
      winner: undefined,
    },
    secondRow: {
      board: [
        [undefined, undefined, undefined, undefined],
        ['x', 'x', 'x', 'x'],
        [undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined],
      ],
      winner: {
        winner: 'x',
        line: [4,5,6,7],
      },
    },
    secondCol: {
      board: [
        [undefined, 'x', undefined, undefined],
        [undefined, 'x', undefined, undefined],
        [undefined, 'x', undefined, undefined],
        [undefined, 'x', undefined, undefined],
      ],
      winner: {
        winner: 'x',
        line: [1,5,9,13],
      },
    },
    diagLR: {
      board: [
        ['x', undefined, undefined, undefined],
        [undefined, 'x', undefined, undefined],
        [undefined, undefined, 'x', undefined],
        [undefined, undefined, undefined, 'x'],
      ],
      winner: {
        winner: 'x',
        line: [0,5,10,15],
      },
    },
    diagRL: {
      board: [
        [undefined, undefined, undefined, 'x'],
        [undefined, undefined, 'x', undefined],
        [undefined, 'x', undefined, undefined],
        ['x', undefined, undefined, undefined],
      ],
      winner: {
        winner: 'x',
        line: [3,6,9,12],
      },
    },
  },
  n5x5: {
    empty: {
      board: [
        [undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined],
      ],
      winner: undefined,
    },
    inProgress: {
      board: [
        ['x', undefined, undefined, undefined, undefined],
        [undefined, 'o', undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined],
      ],
      winner: undefined,
    },
    tie: {
      board: [
        ['x', 'o', 'x', 'o', 'x'],
        ['x', 'o', 'o', 'x', 'x'],
        ['o', 'x', 'x', 'o', 'x'],
        ['o', 'x', 'x', 'o', 'o'],
        ['o', 'x', 'x', 'o', 'o'],
      ],
      winner: undefined,
    },
    secondRow: {
      board: [
        [undefined, undefined, undefined, undefined, undefined],
        ['x', 'x', 'x', 'x', 'x'],
        [undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined, undefined],
      ],
      winner: {
        winner: 'x',
        line: [5,6,7,8,9],
      },
    },
    secondCol: {
      board: [
        [undefined, 'x', undefined, undefined, undefined],
        [undefined, 'x', undefined, undefined, undefined],
        [undefined, 'x', undefined, undefined, undefined],
        [undefined, 'x', undefined, undefined, undefined],
        [undefined, 'x', undefined, undefined, undefined],
      ],
      winner: {
        winner: 'x',
        line: [1,6,11,16,21],
      },
    },
    diagLR: {
      board: [
        ['x', undefined, undefined, undefined, undefined],
        [undefined, 'x', undefined, undefined, undefined],
        [undefined, undefined, 'x', undefined, undefined],
        [undefined, undefined, undefined, 'x', undefined],
        [undefined, undefined, undefined, undefined, 'x'],
      ],
      winner: {
        winner: 'x',
        line: [0,6,12,18,24],
      },
    },
    diagRL: {
      board: [
        [undefined, undefined, undefined, undefined, 'x'],
        [undefined, undefined, undefined, 'x', undefined],
        [undefined, undefined, 'x', undefined, undefined],
        [undefined, 'x', undefined, undefined, undefined],
        ['x', undefined, undefined, undefined, undefined],
      ],
      winner: {
        winner: 'x',
        line: [4,8,12,16,20],
      },
    },
  },
}

describe("computeWinner", () => {
  Object.entries(mocks).forEach(([mockGroupKey, mockGroup]) => {
    Object.entries(mockGroup).forEach(([mockKey, mock]) => {
      test(`${mockGroupKey}.${mockKey}`, () => {
        expect(computeWinner(mock.board)).toStrictEqual(mock.winner);
      })
    })
  })
})