import BrickWall from "./brick.js"

const buildLevel = (game, level1) => {
  const bricks = [];

  level1.forEach((row, rowIndex) => {
    row.forEach((brick, brickIndex) => {
      if(brick === 1) {
        bricks.push(new BrickWall(game, { x: 60 * brickIndex, y: 20 * rowIndex + 20}))
      }
    });
  });

  return bricks;
}


const level1 = [
    [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]

export { buildLevel, level1 };