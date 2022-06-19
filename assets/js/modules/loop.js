class GameLoop {
  static lastTime = 0;

  static gameLoop = ({ gamescene, timestamp, paddle }) => {
    const deltaTime = timestamp - GameLoop.lastTime;
    GameLoop.lastTime = timestamp;
    gamescene.clearScene();
    paddle.update(deltaTime);
    paddle.drawPaddle(gamescene.ctx);
  }
}

export default GameLoop;