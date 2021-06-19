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
  if ([array[0], array[3], array[6]].every(x => x === symbol)
    || [array[1], array[4], array[7]].every(x => x === symbol)
    || [array[2], array[5], array[8]].every(x => x === symbol)
    || [array[0], array[1], array[2]].every(x => x === symbol)
    || [array[3], array[4], array[5]].every(x => x === symbol)
    || [array[6], array[7], array[8]].every(x => x === symbol)
    || [array[0], array[4], array[8]].every(x => x === symbol)
    || [array[2], array[4], array[6]].every(x => x === symbol)) {
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
