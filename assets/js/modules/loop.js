class GameLoop {
  static lastTime = 0;

  static gameLoop = ({
    gamescene, timestamp, paddle, ball,
  }) => {
    const deltaTime = timestamp - GameLoop.lastTime;
    GameLoop.lastTime = timestamp;
    gamescene.clearScene();
    paddle.update(deltaTime);
    paddle.drawPaddle(gamescene.ctx);
    ball.update(deltaTime);
    ball.drawBall(gamescene.ctx);
  }
}

export default GameLoop;