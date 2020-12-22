const input = document.querySelector("#userinput");
const button = document.querySelector("#enter");
const ul = document.querySelector("#list");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement('li');
  var button = document.createElement('button');
  li.appendChild(document.createTextNode(input.value));
  button.appendChild(document.createTextNode('Delete'))
  li.appendChild(button);
  ul.appendChild(li);
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

const toggleStrikingOrRemoveList = (e) => {
  if (e.target){
    if (e.target.matches('li')) {
      e.target.classList.toggle("done");
    }
    else if (e.target.matches('button')){
      e.target.parentNode.remove();
    }
  }
  
}

button.addEventListener('click', addListAfterClick); 

input.addEventListener('keypress', addListAfterKeypress); 

ul.addEventListener('click', toggleStrikingOrRemoveList);