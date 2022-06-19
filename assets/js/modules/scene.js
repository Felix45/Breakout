import GamePaddle from './paddle.js';

class Scene {
  static SCENE_WIDTH = 600;

  static SCENE_HEIGHT = 600;

  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
  }

  drawScene = () => {
    this.clearScene();
    this.ctx.fillStyle = '#f00';
    const paddle = new GamePaddle(Scene.SCENE_WIDTH, Scene.SCENE_HEIGHT);
    paddle.drawPaddle(this.ctx);
  }

  clearScene = () => {
    this.ctx.clearRect(0, 0, Scene.SCENE_WIDTH, Scene.SCENE_HEIGHT);
  }
}

export default Scene;