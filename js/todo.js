let newToDo = document.getElementById('todo__input');
const toDoContainer = document.querySelector('.todo__container');

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
    document.querySelector('.todo__list').appendChild(list);
  }
  newToDo.value = '';
}

document.querySelector('.todo__form').addEventListener('submit', (event) => {
  event.preventDefault();
  addToDo();
});
