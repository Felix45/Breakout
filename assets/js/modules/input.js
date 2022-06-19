class EventHandlers {
  static LEFT = 'ArrowLeft';

  static RIGHT = 'ArrowRight';

  static paddleHandler = (paddle) => {
    document.addEventListener('keydown', (event) => {
      EventHandlers.movePaddle(event, paddle);
    });

    document.addEventListener('keyup', (event) => {
      EventHandlers.stopPaddle(event, paddle);
    });
  }

  static movePaddle = (event, paddle) => {
    switch (event.key) {
      case EventHandlers.LEFT:
        paddle.movePaddleLeft();
        break;
      case EventHandlers.RIGHT:
        paddle.movePaddleRight();
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