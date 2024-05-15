const toDoForm = document.getElementById('todo__form');
const toDoInput = document.getElementById('todo__input');
const toDoList = document.getElementById('todo__list');

const SAVED_TODOS = 'savedTodos';

let todos = [];

function loadTodos() {
  const savedTodos = localStorage.getItem(SAVED_TODOS);
  if (savedTodos === null) return;
  const parsedTodos = JSON.parse(savedTodos);
  parsedTodos.forEach(({ todo }) => paintTodo(todo));
  saveTodos();
}

function saveTodos(text) {
  localStorage.setItem(SAVED_TODOS, JSON.stringify(todos));
}

function paintTodo(todo) {
  const list = document.createElement('li');
  const removeButton = document.createElement('button');
  const id = todos.length + 1;
  list.id = id;
  list.textContent = todo;
  removeButton.textContent = 'x';
  list.appendChild(removeButton);
  toDoList.appendChild(list);
  todos.push({ todo, id });
}

function handleSubmit(event) {
  event.preventDefault();
  const inputValue = toDoInput.value.trim();
  if (inputValue === '') return;
  paintTodo(inputValue);
  saveTodos();
  toDoInput.value = '';
}

function removeTodo(event) {
  if (event.target.tagName !== 'BUTTON') return;
  const targetList = event.target.parentNode;
  toDoList.removeChild(targetList);
  todos = todos.filter((todo) => todo.id !== +targetList.id);
  saveTodos();
}

export function initTodo() {
  loadTodos();
  toDoForm.addEventListener('submit', handleSubmit);
  toDoList.addEventListener('click', removeTodo);
}
