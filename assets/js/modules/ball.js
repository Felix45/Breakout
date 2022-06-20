class Ball {
  constructor(gameWidth, gameHeight, game) {
    this.imgBall = document.getElementById('gameball');
    this.width = 15;
    this.height = 15;
    this.game = game;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.position = { x: gameWidth / 2 - this.width / 2, y: 0 };
    this.speed = { x: 2, y: 2 };
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
      if (this.position.x + this.width > this.gameWidth || this.position.x < 0) {
        this.speed.x = -this.speed.x;
      }

      if (this.position.y + this.height > this.gameHeight || this.position.y < 0) {
        this.speed.y = -this.speed.y;
      }
    }

    checkBallPaddleCollision = () => {
      const ballPosition = this.position.y + this.height;

      const paddleLeftSide = this.game.paddle.position.x;
      const paddleRightSide = this.game.paddle.position.x + this.game.paddle.width;

      if (ballPosition >= this.game.paddle.position.y
        && this.position.x >= paddleLeftSide
        && this.position.x + this.width <= paddleRightSide) {
        this.speed.y = -this.speed.y;
        this.position.y = this.game.paddle.position.y - this.height;
      }
    }
}

export default Ball;