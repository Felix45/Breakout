class EventHandlers {
  static LEFT = 'ArrowLeft';

  static RIGHT = 'ArrowRight';

  static ESCAPE = 'Escape';

  static SPACE = ' ';

  static paddleHandler = (paddle, gamescene) => {
    document.addEventListener('keydown', (event) => {
      EventHandlers.movePaddle(event, paddle, gamescene);
    });

    document.addEventListener('keyup', (event) => {
      EventHandlers.stopPaddle(event, paddle, gamescene);
    });
  }

  static movePaddle = (event, paddle, gamescene) => {
    switch (event.key) {
      case EventHandlers.LEFT:
        paddle.movePaddleLeft();
        break;
      case EventHandlers.RIGHT:
        paddle.movePaddleRight();
        break;
      case EventHandlers.ESCAPE:
        gamescene.pauseGame();
        break;
      case EventHandlers.SPACE:
        gamescene.start();
        break;
      default:
        break;
    }
  }

  static stopPaddle = (event, paddle) => {
    paddle.stopPaddle();
  }
}

export default EventHandlers;