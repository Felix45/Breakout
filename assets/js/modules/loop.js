class GameLoop {
  static lastTime = 0;

  static gameLoop = ({
    gamescene, timestamp, paddle, ball,
  }) => {
    const deltaTime = timestamp - GameLoop.lastTime;
    GameLoop.lastTime = timestamp;
    gamescene.clearScene();

    const gameObjects = [paddle, ball];
    gameObjects.forEach((object) => {
      object.update(deltaTime);
      object.draw(gamescene.ctx);
    });
  }
}

export default GameLoop;