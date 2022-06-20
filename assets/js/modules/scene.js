import GamePaddle from './paddle.js';
import Ball from './ball.js';

class Scene {
  static SCENE_WIDTH = 600;

  static SCENE_HEIGHT = 600;

  constructor(canvas) {
    this.canvas = canvas;
    this.paddle = '';
    this.ball = '';
    this.ctx = this.canvas.getContext('2d');
  }

  drawScene = () => {
    this.clearScene();
    this.paddle = new GamePaddle(Scene.SCENE_WIDTH, Scene.SCENE_HEIGHT);
    this.paddle.draw(this.ctx);

    this.ball = new Ball(Scene.SCENE_WIDTH, Scene.SCENE_HEIGHT, this);
    this.ball.draw(this.ctx);
  }

  clearScene = () => {
    this.ctx.clearRect(0, 0, Scene.SCENE_WIDTH, Scene.SCENE_HEIGHT);
  }
}

export default Scene;