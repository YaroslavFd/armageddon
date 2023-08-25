export const declensionOfAsteroids = (count: number) => {
  if (count === 1) {
    return `${count} астероид`;
  }
  if (count >= 2 && count <= 4) {
    return `${count} астероида`;
  }
  return `${count} астероидов`;
};
