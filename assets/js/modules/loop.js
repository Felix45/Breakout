class GameLoop {
  static lastTime = 0;

  static gameLoop = ({ gamescene, timestamp }) => {
    const deltaTime = timestamp - GameLoop.lastTime;
    GameLoop.lastTime = timestamp;
    gamescene.clearScene();
    gamescene.update(deltaTime);
    gamescene.drawScene();
  }
}

export default GameLoop;