import GamePaddle from './paddle.js';
import Ball from './ball.js';
import { level1, level2, buildLevel } from './levels.js';
import ScoreBoard from './scoreboard.js';
import EventHandlers from './input.js';

const GAMESTATE = { 
  PAUSED: 0, RUNNING: 1, MENU: 2, GAMEOVER: 3, NEWLEVEL: 4
};

class Scene {
  static SCENE_WIDTH = 600;

  static SCENE_HEIGHT = 600;

  constructor(canvas) {
    this.canvas = canvas;
    this.paddle = new GamePaddle(Scene.SCENE_WIDTH, Scene.SCENE_HEIGHT);
    this.ball = new Ball(Scene.SCENE_WIDTH, Scene.SCENE_HEIGHT, this);
    this.scoreBoard = new ScoreBoard(this, Scene.SCENE_WIDTH, Scene.SCENE_HEIGHT);
    this.brickwall = buildLevel(this, level2);
    this.gameObjects = [this.paddle, this.ball, this.scoreBoard];
    this.ctx = this.canvas.getContext('2d');
    

    this.gamestate = GAMESTATE.MENU;
    this.lives = 3;
    this.score = 0;

    EventHandlers.paddleHandler(this.paddle, this);
  }

  start = () => {
    if (this.gamestate !== GAMESTATE.MENU ) return;
    this.gamestate = GAMESTATE.RUNNING;
  }

  update = () => {
    if (this.lives === 0) {
      this.gamestate = GAMESTATE.GAMEOVER;
    } 

    if (this.gamestate === GAMESTATE.PAUSED
      || this.gamestate === GAMESTATE.MENU
      || this.gamestate === GAMESTATE.GAMEOVER) return;

    [...this.gameObjects, ...this.brickwall].forEach((object) => {
      object.update();
    });

    this.brickwall = this.brickwall.filter((brick) => !brick.deleted);
  }

  drawScene = () => {
    this.ctx.rect(0, 0, Scene.SCENE_WIDTH, Scene.SCENE_HEIGHT);
    this.ctx.fillStyle = '#2a52be';
    this.ctx.fill();
    [...this.gameObjects, ...this.brickwall].forEach(((object) => object.draw(this.ctx)));

    if (this.gamestate === GAMESTATE.PAUSED) {
      this.ctx.rect(0, 0, Scene.SCENE_WIDTH, Scene.SCENE_HEIGHT);
      this.ctx.fillStyle = 'rgba(0,0,0,0.8)';
      this.ctx.fill();
      this.ctx.font = 'bold   30px courier';
      this.ctx.fillStyle = '#ff0';
      this.ctx.textAlign = 'center';
      this.ctx.fillText('Paused', Scene.SCENE_WIDTH / 2, Scene.SCENE_HEIGHT / 2);
    }

    if (this.gamestate === GAMESTATE.MENU) {
      this.ctx.rect(0, 0, Scene.SCENE_WIDTH, Scene.SCENE_HEIGHT);
      this.ctx.fillStyle = '#2a52be';
      this.ctx.fill();
      this.ctx.font = 'bold 30px courier';
      this.ctx.fillStyle = 'rgb(255,255,0)';
      this.ctx.textAlign = 'center';
      this.ctx.fillText('Press spacebar to start', Scene.SCENE_WIDTH / 2, Scene.SCENE_HEIGHT / 2);
    }

    if (this.gamestate === GAMESTATE.GAMEOVER) {
      this.ctx.rect(0, 0, Scene.SCENE_WIDTH, Scene.SCENE_HEIGHT);
      this.ctx.fillStyle = '#2a52be';
      this.ctx.fill();
      this.ctx.font = 'bold 30px courier';
      this.ctx.fillStyle = 'rgb(255,255,0)';
      this.ctx.textAlign = 'center';
      this.ctx.fillText('Game Over !!!', Scene.SCENE_WIDTH / 2, Scene.SCENE_HEIGHT / 2);
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