const toDoContainer = document.getElementById('todo__container');
const toDoForm = document.getElementById('todo__form');
const toDoInput = document.getElementById('todo__input');
const toDoList = document.getElementById('todo__list');

export function addToDo() {
  toDoContainer.style.display = 'block';

  if (newToDo.value !== '') {
    localStorage.setItem('savedToDo', newToDo.value);

    const list = document.createElement('li');
    list.innerHTML = newToDo.value;

    const removeButton = document.createElement('button');
    removeButton.innerText = 'x';
    list.appendChild(removeButton);
    removeButton.addEventListener('click', function () {
      list.remove();
      localStorage.removeItem('savedToDo');
    });
  toDoList.appendChild(list);
  }
  newToDo.value = '';
}

toDoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  addToDo();
});
