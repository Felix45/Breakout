class GamePaddle {
  constructor(gameWidth, gameHeight) {
    this.width = 100;
    this.height = 15;
    this.speed = 0;
    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - (this.height * 2),
    };
  }

  draw = (ctx) => {
    ctx.fillStyle = '#000';
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  movePaddleLeft = () => {
    this.speed = -10;
  }

  movePaddleRight = () => {
    this.speed = 10;
  }

  stopPaddle = () => {
    this.speed = 0;
  }

  update = () => {
    this.position.x += this.speed;

    if (this.position.x < 0) this.position.x = 0;

    if ((this.position.x + this.width) > 600) this.position.x = 600 - this.width;
  }
}

export default GamePaddle;