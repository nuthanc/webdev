const input = document.querySelector("#userinput");
const button = document.querySelector("#enter");
const list = document.querySelector("#list")

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement('li');
  li.appendChild(document.createTextNode(input.value));
  list.appendChild(li);
  input.value = '';
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

const addListAfterKeypress = (event) => {
  if (event.keyCode === 13 && inputLength() > 0) {
    createListElement();
  }
}

button.addEventListener('click', addListAfterClick); 

input.addEventListener('keypress', addListAfterKeypress); 