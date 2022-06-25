import GamePaddle from './paddle.js';
import Ball from './ball.js';
import { level1, buildLevel } from './levels.js';
import EventHandlers from './input.js';

const GAMESTATE = {
  PAUSED: 0, RUNNING: 1, MENU: 2, GAMEOVER: 3,
};

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

    this.gamestate = GAMESTATE.MENU;
    this.lives = 3;

    EventHandlers.paddleHandler(this.paddle, this);
  }

  start = () => {
    if (this.gamestate !== GAMESTATE.MENU) return;
    this.gamestate = GAMESTATE.RUNNING;
  }

  update = () => {
    if (this.lives === 0) this.gamestate = GAMESTATE.GAMEOVER;

    if (this.gamestate === GAMESTATE.PAUSED
      || this.gamestate === GAMESTATE.MENU
      || this.gamestate === GAMESTATE.GAMEOVER) return;

    [...this.gameObjects, ...this.brickwall].forEach((object) => {
      object.update();
    });

    this.brickwall = this.brickwall.filter((brick) => !brick.deleted);
  }

  drawScene = () => {
    [...this.gameObjects, ...this.brickwall].forEach(((object) => object.draw(this.ctx)));

    if (this.gamestate === GAMESTATE.PAUSED) {
      this.ctx.rect(0, 0, Scene.SCENE_WIDTH, Scene.SCENE_HEIGHT);
      this.ctx.fillStyle = 'rgba(0,0,0,0.8)';
      this.ctx.fill();
      this.ctx.font = '30px cursive';
      this.ctx.fillStyle = '#fff';
      this.ctx.textAlign = 'center';
      this.ctx.fillText('Paused', Scene.SCENE_WIDTH / 2, Scene.SCENE_HEIGHT / 2);
    }

    if (this.gamestate === GAMESTATE.MENU) {
      this.ctx.rect(0, 0, Scene.SCENE_WIDTH, Scene.SCENE_HEIGHT);
      this.ctx.fillStyle = 'rgba(0,0,0,1)';
      this.ctx.fill();
      this.ctx.font = '30px cursive';
      this.ctx.fillStyle = 'rgb(255,255,0)';
      this.ctx.textAlign = 'center';
      this.ctx.fillText('PRESS SPACEBAR TO START', Scene.SCENE_WIDTH / 2, Scene.SCENE_HEIGHT / 2);
    }

    if (this.gamestate === GAMESTATE.GAMEOVER) {
      this.ctx.rect(0, 0, Scene.SCENE_WIDTH, Scene.SCENE_HEIGHT);
      this.ctx.fillStyle = 'rgba(0,0,0,1)';
      this.ctx.fill();
      this.ctx.font = '30px cursive';
      this.ctx.fillStyle = 'rgb(255,255,0)';
      this.ctx.textAlign = 'center';
      this.ctx.fillText('GAME OVER !!!', Scene.SCENE_WIDTH / 2, Scene.SCENE_HEIGHT / 2);
    }
  }

  clearScene = () => {
    this.ctx.clearRect(0, 0, Scene.SCENE_WIDTH, Scene.SCENE_HEIGHT);
  }

  pauseGame = () => {
    if (this.gamestate === GAMESTATE.PAUSED) {
      this.gamestate = GAMESTATE.RUNNING;
    } else {
      this.gamestate = GAMESTATE.PAUSED;
    }
  }
}

export default Scene;