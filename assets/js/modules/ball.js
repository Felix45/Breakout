class Ball {
  constructor(gameWidth, gameHeight) {
    this.imgBall = document.getElementById('gameball');
    this.width = 15;
    this.height = 15;
    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - 23,
    };
  }

    drawBall = (ctx) => {
      ctx.drawImage(this.imgBall, this.position.x, this.position.y, this.width, this.height);
    }

    update = (dt) => {
      if (!dt) return true;

      return false;
    }
}

export default Ball;