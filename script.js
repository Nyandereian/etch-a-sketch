const container = document.querySelector('.container');
const resetButton = document.querySelector('#reset');
let gridSide = 16;
let gridCount = gridSide * gridSide;

createGrid(gridSide);

resetButton.addEventListener('click', () => {
  do {
    gridSide = prompt('How many grids per side?', 16);
    if(gridSide == null) {
      return;
    }
    gridSide = parseInt(gridSide);
  }
  while(!Number.isInteger(gridSide) || gridSide < 1);
  gridCount = gridSide * gridSide;

  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }
  createGrid(gridSide);
});

function createGrid(columns) {
  container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  for(let i = 0; i < gridCount; i++) {
    const div = document.createElement('div');
    div.classList.add('note');
    container.appendChild(div);
  }
  const divs = document.querySelectorAll('.note');
  divs.forEach((div) => {
    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = generateRandomColor();
      opacity = div.style.opacity;
      if(opacity < 1) {
        div.style.opacity = Number(opacity) + 0.1;
      }
    });
  });
}

function generateRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for(let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
