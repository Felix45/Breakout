class ScoreBoard {
  constructor(gamescene, gamewidth, gameheight) {
    this.gamescene = gamescene;
    this.gamewidth = gamewidth;
    this.gameheight = gameheight;
  }

  draw(ctx) {
    ctx.font = 'bold 20px Courier';
    ctx.fillStyle = "#000";
    console.log(this.gamescene.score);
    ctx.fillText(`Score: ${this.gamescene.score} Lives: ${this.gamescene.lives}`, this.gamewidth - 200, 30, 250);
  }

  update() {

  }
}

export default ScoreBoard;