/**
 * These example boards represent the row and column of live cells, where an empty array
 * represents an empty row. Feel free to keep this data structure or change it to something
 * that works better for you.
 */

//changed data structure to a multidimentional array
export const BLOCK_BOARD = [
  [0, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
];

export const BLINKER_BOARD = {
  0: [0, 0],
  1: [0, 1],
  2: [0, 1],
  3: [0, 1],
  4: [0, 0],
};

// Implement the Game of Life here to transform the inputBoard into the outputBoard!
export function getNextGeneration(inputBoard) {
  const outputBoard = inputBoard;

  return outputBoard;
}