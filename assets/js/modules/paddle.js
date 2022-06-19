class GamePaddle {
  constructor(gameWidth, gameHeight) {
    this.width = 100;
    this.height = 20;
    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 20,
    };
  }

  drawPaddle = (ctx) => {
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

export default GamePaddle;