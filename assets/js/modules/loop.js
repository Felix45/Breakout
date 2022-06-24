class GameLoop {
  static lastTime = 0;

  static gameLoop = ({
    gamescene, timestamp,
  }) => {
    const deltaTime = timestamp - GameLoop.lastTime;
    GameLoop.lastTime = timestamp;
    gamescene.clearScene();

    const gameObjects = [gamescene.paddle, gamescene.ball, gamescene.brickwall];
    gameObjects.forEach((object) => {
      object.update(deltaTime);
      object.draw(gamescene.ctx);
    });
  }
}

export default GameLoop;