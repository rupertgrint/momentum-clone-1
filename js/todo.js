function addToDo() {
  const newToDo = document.getElementById('todo__input').value;
  if (newToDo !== '') {
    localStorage.setItem('savedToDo', newToDo);

    const list = document.createElement('li');
    list.textContent = newToDo;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'x';
    removeButton.addEventListener('click', function () {
      list.remove();
      removeButton.remove();
      localStorage.removeItem('savedToDo');
    });

    list.appendChild(removeButton);
    document.getElementById('todo__list').appendChild(list);

    const todoList = document.getElementById('todo__list');
    todoList.appendChild(list);
  }
}

document.getElementById('todo__input').addEventListener('keypress', (event) => {
  if (event.keyCode == 13) {
    event.preventDefault();
    addToDo();
    document.getElementById('todo__input').value = '';
  }
});

export function showToDo() {
  document.getElementById('todo__container').style.display = 'block';
  const savedToDo = localStorage.getItem('savedToDo');
  if (savedToDo !== null && savedToDo !== '') {
    const list = document.createElement('li');
    list.textContent = savedToDo;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'x';
    removeButton.addEventListener('click', function () {
      list.remove();
      removeButton.remove();
      localStorage.removeItem('savedToDo');
    });

    list.appendChild(removeButton);
    document.getElementById('todo__list').appendChild(list);
  }
}
