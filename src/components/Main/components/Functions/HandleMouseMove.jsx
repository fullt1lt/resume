export const sizeHalfCounter = (event) => {
  const rect = event.currentTarget.getBoundingClientRect();
  return { width: rect.width / 2, heigth: rect.height / 2 };
};

export const handleMouseMove = (event, setMousePosition) => {
  const size = sizeHalfCounter(event);
  const x = (size.width - event.clientX) / 25;
  const y = (size.heigth - event.clientY) / 25;
  setMousePosition({ x, y });
};