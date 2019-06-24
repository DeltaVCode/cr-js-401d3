let state;

let source = document.getElementById('stuff-template').innerHTML;
let template = Handlebars.compile(source);

$('#clicker').on('click', handleClick);
$('#wordsInput').on('change', handleWords);

function init() {
  state = {
    words: 'nothing to see here',
  };

  render();
}

function handleWords() {
  state = {
    words: $(this).val(),
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
  $('#stuff').html(template(state));
}

$(document).ready(init);
