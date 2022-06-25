import Scene from './modules/scene.js';
import canvas from './modules/dom.js';
import GameLoop from './modules/loop.js';

const gamescene = new Scene(canvas);

const loop = (timestamp) => {
  GameLoop.gameLoop({ gamescene, timestamp });
  requestAnimationFrame(loop);
};

requestAnimationFrame(loop);
