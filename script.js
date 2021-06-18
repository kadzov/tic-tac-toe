const display = document.querySelector('#display');
const restart = document.querySelector('#restart');
const block = document.querySelector('#block');
const cells = Array.from(document.querySelectorAll('.cell'));
let array = new Array(9);
let gg = 0;
let turn = 0;
cells.forEach(x => {
  x.addEventListener('click', () => {
    if (!array[cells.indexOf(x)]) {
      if (!turn) {
        array[cells.indexOf(x)] = '✕';
        turn++;
      } else {
        array[cells.indexOf(x)] = '◯';
        turn--;
      }
      x.textContent = array[cells.indexOf(x)];
      checkWinOrDraw();
    }
  });
});
function checkWinOrDraw() {
  const symbols = ['✕', '◯'];
  for (const symbol of symbols) {
    if ([array[0], array[3], array[6]].every(x => x === symbol)
      || [array[1], array[4], array[7]].every(x => x === symbol)
      || [array[2], array[5], array[8]].every(x => x === symbol)
      || [array[0], array[1], array[2]].every(x => x === symbol)
      || [array[3], array[4], array[5]].every(x => x === symbol)
      || [array[6], array[7], array[8]].every(x => x === symbol)
      || [array[0], array[4], array[8]].every(x => x === symbol)
      || [array[2], array[4], array[6]].every(x => x === symbol)) {
      display.textContent = symbol + ' wins!';
      gg++;
    }
  }
  if (!array.includes(undefined) && !gg) {
    display.textContent = 'Draw!';
    gg++;
  }
  if (gg === 1) {
    block.style.display = 'block';
  }
}
restart.addEventListener('click', () => {
  cells.forEach(x => {
    x.textContent = '';
  });
  array = new Array(9);
  display.textContent = '';
  block.style.display = 'none';
  gg = 0;
});



// const gameBoard = (() => {

//   return {

//   };
// })();
// const Player = (symbol) => {
//   array.push(symbol)
// };
