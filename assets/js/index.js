import Scene from './modules/scene.js';
import canvas from './modules/dom.js';
import GameLoop from './modules/loop.js';
import EventHandlers from './modules/input.js';

const gamescene = new Scene(canvas);

gamescene.drawScene();

EventHandlers.paddleHandler(gamescene.paddle);

const loop = (timestamp) => {
  GameLoop.gameLoop({
    gamescene, timestamp, paddle: gamescene.paddle, ball: gamescene.ball,
  });
  requestAnimationFrame(loop);
};

loop();
