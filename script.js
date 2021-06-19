const display = document.querySelector('#display');
const restart = document.querySelector('#restart');
const block = document.querySelector('#block');
const cells = Array.from(document.querySelectorAll('.cell'));
let array = new Array(9);
display.textContent = '✕ turn';
cells.forEach(x => {
  x.addEventListener('click', () => {
    if (!array[cells.indexOf(x)]) {
      if (display.textContent === '✕ turn') {
        array[cells.indexOf(x)] = '✕';
        display.textContent = '◯ turn';
        getResult('✕');
      } else {
        array[cells.indexOf(x)] = '◯';
        display.textContent = '✕ turn';
        getResult('◯');
      }
      x.textContent = array[cells.indexOf(x)];
    }
  });
});
function getResult(symbol) {
  const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
    [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],
  ];
  if (winConditions.map(x => [array[x[0]], array[x[1]], array[x[2]]])
    .some(i => i.every(j => j === symbol))) {
    display.textContent = symbol + ' wins!';
  } else if (!array.includes(undefined)) {
    display.textContent = 'Draw!';
  }
  if (!['✕ turn', '◯ turn'].includes(display.textContent)) {
    block.style.display = 'block';
  }
}
restart.addEventListener('click', () => {
  cells.forEach(x => {
    x.textContent = '';
  });
  array = new Array(9);
  display.textContent = '✕ turn';
  block.style.display = 'none';
});
