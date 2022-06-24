import { level1, buildLevel } from './levels.js';

class GameLoop {
  static lastTime = 0;

  static gameLoop = ({
    gamescene, timestamp,
  }) => {
    const deltaTime = timestamp - GameLoop.lastTime;
    GameLoop.lastTime = timestamp;
    gamescene.clearScene();

    const brickwalls = buildLevel(gamescene, level1);

    const gameObjects = [gamescene.paddle, gamescene.ball, ...brickwalls];
    gameObjects.forEach((object) => {
      object.update(deltaTime);
      object.draw(gamescene.ctx);
    });
  }
}

export default GameLoop;