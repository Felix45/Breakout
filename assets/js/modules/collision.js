const detectCollision = (ball, gameObject) => {
  const ballBottom = ball.position.y + ball.height;
  const ballTop = ball.position.y;

  const objectTopSide = gameObject.position.y;
  const objectLeftSide = gameObject.position.x;
  const objectRightSide = gameObject.position.x + gameObject.width;
  const objectBottomSide = gameObject.position.y + gameObject.height;

  if (ballBottom >= objectTopSide
    && ballTop <= objectBottomSide
    && ball.position.x >= objectLeftSide
    && ball.position.x + ball.width <= objectRightSide) {
    return true;
  }
  return false;
};

export default detectCollision;