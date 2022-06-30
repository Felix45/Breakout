class ScoreBoard {
  constructor(gamescene, gamewidth, gameheight) {
    this.gamescene = gamescene;
    this.gamewidth = gamewidth;
    this.gameheight = gameheight;
  }

  draw(ctx) {
    ctx.font = 'bold 20px Courier';
    ctx.fillStyle = '#000';
    ctx.fillText(`Score: ${this.gamescene.score} Lives: ${this.gamescene.lives} Level: ${this.gamescene.level + 1}`,
      this.gamewidth - 200, 30, 400);
  }

  update() {

  }
}

export default ScoreBoard;