const toDoContainer = document.getElementById('todo__container');
const toDoForm = document.getElementById('todo__form');
const toDoInput = document.getElementById('todo__input');
const toDoList = document.getElementById('todo__list');

const SAVED_TODO = 'savedTodo';

function loadTodo() {
  const savedTodo = localStorage.getItem(SAVED_TODO);
  if (savedTodo === null) return;
  paintTodo(savedTodo);
}

function saveTodo(text) {
  localStorage.setItem(SAVED_TODO, text);
}

function paintTodo(todo) {
  const list = document.createElement('li');
  const removeButton = document.createElement('button');
  list.textContent = todo;
  removeButton.textContent = 'x';
  list.appendChild(removeButton);
  removeButton.addEventListener('click', () => {
    list.remove();
    localStorage.removeItem(SAVED_TODO);
  });
  toDoList.appendChild(list);
}

function handleSubmit(event) {
  event.preventDefault();
  const inputValue = toDoInput.value.trim();
  if (inputValue === '') return;
  saveTodo(inputValue);
  paintTodo(inputValue);
  toDoInput.value = '';
}

export function initTodo() {
  loadTodo();
  toDoForm.addEventListener('submit', handleSubmit);
}
