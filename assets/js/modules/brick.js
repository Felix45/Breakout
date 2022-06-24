class BrickWall {
  constructor(game, position) {
    this.width = 60;
    this.height = 20;
    this.game = game;
    this.position = position;
    this.brickImage = document.getElementById('brickwall');
  }

  draw(ctx) {
    ctx.drawImage(this.brickImage, this.position.x, this.position.y, this.width, this.height);
  }

  update = () => {

  }
}

export default BrickWall;