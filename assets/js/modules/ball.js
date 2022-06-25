import detectCollision from './collision.js';

class Ball {
  constructor(gameWidth, gameHeight, game) {
    this.imgBall = document.getElementById('gameball');
    this.width = 15;
    this.height = 15;
    this.game = game;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.speed = { x: 4, y: -4 };
    this.reset();
  }

  reset() {
    this.position = { x: this.gameWidth / 2 - this.width / 2, y: this.gameHeight / 2 };
  }

    draw = (ctx) => {
      ctx.drawImage(this.imgBall, this.position.x, this.position.y, this.width, this.height);
    }

    update = () => {
      this.position.x += this.speed.x;
      this.position.y += this.speed.y;

      this.checkBorderCollision();
      this.checkBallPaddleCollision();
    }

    checkBorderCollision = () => {
      if (this.position.y + this.height >= this.gameHeight) {
        this.game.lives -= 1;
        this.reset();
      }

      if (this.position.x + this.width > this.gameWidth || this.position.x < 0) {
        this.speed.x = -this.speed.x;
      }

      if (this.position.y + this.height > this.gameHeight || this.position.y < 0) {
        this.speed.y = -this.speed.y;
      }
    }

    checkBallPaddleCollision = () => {
      if (detectCollision(this, this.game.paddle)) {
        this.speed.y = -this.speed.y;
        this.position.y = this.game.paddle.position.y - this.height;
      }
    }
}

export default Ball;