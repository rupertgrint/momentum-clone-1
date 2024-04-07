function showGreeting(userName) {
  document.getElementById('greeting__form').style.display = 'none';
  document.getElementById('greeting__message').innerText = 'Hello, ' + userName;
}

function passInput() {
  const formInput = document.getElementById('greeting__input').value;
  if (formInput !== '') {
    localStorage.setItem('name', formInput);
    showGreeting(formInput);
  }
}

export function displayGreeting() {
  const savedName = localStorage.getItem('name');
  if (savedName !== '' && savedName !== null) {
    showGreeting(savedName);
    document.getElementById('todo__container').style.display = 'block';
  } else {
    document.getElementById('todo__container').style.display = 'none';
    document
      .getElementById('greeting__input')
      .addEventListener('keypress', (event) => {
        if (event.keyCode === 13) {
          if (document.getElementById('greeting__input').value !== '') {
            event.preventDefault();
            passInput();
          }
        }
      });
  }
}
