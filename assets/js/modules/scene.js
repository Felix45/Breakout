import GamePaddle from './paddle.js';
import Ball from './ball.js';
import { level1, buildLevel } from './levels.js';
import EventHandlers from './input.js';

class Scene {
  static SCENE_WIDTH = 600;

  static SCENE_HEIGHT = 600;

  constructor(canvas) {
    this.canvas = canvas;
    this.paddle = new GamePaddle(Scene.SCENE_WIDTH, Scene.SCENE_HEIGHT);
    this.ball = new Ball(Scene.SCENE_WIDTH, Scene.SCENE_HEIGHT, this);
    this.brickwall = buildLevel(this, level1);
    this.gameObjects = [this.paddle, this.ball];
    this.ctx = this.canvas.getContext('2d');

    EventHandlers.paddleHandler(this.paddle);
  }

  start = () => {
    this.brickwall = buildLevel(level1);
    this.gameObjects = [this.ball, this.paddle];
  }

  update = (dt) => {
    [...this.gameObjects, ...this.brickwall].forEach((object) => {
      object.update(dt);
    });

    this.brickwall = this.brickwall.filter((brick) => !brick.deleted);
  }

  drawScene = () => {
    [...this.gameObjects, ...this.brickwall].forEach(((object) => object.draw(this.ctx)));
  }

  clearScene = () => {
    this.ctx.clearRect(0, 0, Scene.SCENE_WIDTH, Scene.SCENE_HEIGHT);
  }
}

export default Scene;