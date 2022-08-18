import { BLOCK_BOARD, getNextGeneration } from "./game";

// If you want to use plain JavaScript for unit testing, add some tests to this file
function testStillLife(inputBoard) {
  const generationTwo = getNextGeneration(inputBoard);
  const generationThree = getNextGeneration(inputBoard);
  console.log("inputBoard ="+ JSON.stringify(inputBoard));
  console.log("generationTwo ="+  JSON.stringify(generationTwo));
  console.log("generationThree ="+ JSON.stringify(generationThree));

  if (inputBoard !== generationTwo && inputBoard !== generationThree) {
    throw new Error('FAIL: A still life should not change across multiple generations');
  }

  console.log('PASS: A still life should not change across multiple generations');
}

function main() {
  try {
    testStillLife(BLOCK_BOARD);
  } catch(err) {
    console.error(err.message);
  }
}

main();
