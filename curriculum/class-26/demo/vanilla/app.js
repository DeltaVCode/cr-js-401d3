let state;

let button = document.getElementById('clicker');
button.addEventListener('click', handleClick);

let input = document.getElementById('wordsInput');
input.addEventListener('change', handleWords);

function init() {
  state = {
    words: 'nothing to see here',
  };

  render();
}

function handleWords(e) {
  state = {
    words: e.target.value,
  };
}

function handleClick(event) {
  event.preventDefault();

  state = {
    words: state.words
      .split('')
      .reverse()
      .join(''),
  };

  render();
}

function render() {
  document.getElementById('words').textContent = state.words;
}

init();
