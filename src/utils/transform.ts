export const perspectiveTransform = ({
  rotate = 0,
  rotateX = 0,
  rotateY = 0,
  scale = 1,
  x = 0,
  y = 0,
}: {
  rotate?: number;
  rotateX?: number;
  rotateY?: number;
  scale?: number;
  x?: number;
  y?: number;
}) => {
  return `
    perspective(900px)
    translate3d(${x}px, ${y}px, 0)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    rotate(${rotate}deg)
    scale(${scale})
  `;
};