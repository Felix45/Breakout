import detectCollision from './collision.js';

class BrickWall {
  constructor(game, position) {
    this.width = 60;
    this.height = 20;
    this.game = game;
    this.position = position;
    this.deleted = false;
    this.brickImage = document.getElementById('brickwall');
  }

  draw(ctx) {
    ctx.drawImage(this.brickImage, this.position.x, this.position.y, this.width, this.height);
  }

  update = () => {
    if (detectCollision(this.game.ball, this)) {
      this.game.ball.speed.y = -this.game.ball.speed.y;
      this.deleted = true;
    }
  }
}

export default BrickWall;