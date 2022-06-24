class BrickWall {
  constructor() {
    this.width = 40;
    this.height = 20;
    this.brickImage = document.getElementById('brickwall');
  }

  draw(ctx) {
    ctx.drawImage(this.brickImage, 10, 10, this.width, this.height);
  }
}

export default BrickWall;