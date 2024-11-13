const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

const welcomeMessage = document.querySelector('h1');

welcomeMessage.textContent = `Добро пожаловать, ${username}!`;