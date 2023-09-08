export function shuffleCards(array) {
  const arrayCopy = array.slice();
  arrayCopy.sort(() => Math.random() - 0.5);
  return arrayCopy;
}
