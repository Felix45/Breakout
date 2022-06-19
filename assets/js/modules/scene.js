import GamePaddle from './paddle.js';

class Scene {
  static SCENE_WIDTH = 600;

  static SCENE_HEIGHT = 600;

  constructor(canvas) {
    this.canvas = canvas;
    this.paddle = '';
    this.ctx = this.canvas.getContext('2d');
  }

  drawScene = () => {
    this.clearScene();
    this.ctx.fillStyle = '#f00';
    this.paddle = new GamePaddle(Scene.SCENE_WIDTH, Scene.SCENE_HEIGHT);
    this.paddle.drawPaddle(this.ctx);
  }

  clearScene = () => {
    this.ctx.clearRect(0, 0, Scene.SCENE_WIDTH, Scene.SCENE_HEIGHT);
  }
}

export default Scene;