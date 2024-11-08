const fullnameInput = document.getElementById('fullname');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('psw');
const confirmPasswordInput = document.getElementById('psw-repeat');
const termsCheckbox = document.getElementById('terms');
const signupButton = document.getElementById('signup');
const modal = document.getElementById('modal');
const modalCloseButton = document.getElementById('modal__close');

// Регулярные выражения для валидации
const nameRegex = /^[A-Za-zА-Яа-яё\s]+$/;
const usernameRegex = /^[a-zA-Z0-9_-]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const showModal = () => {
    modal.style.display = 'block';
};

const hideModal = () => {
    modal.style.display = 'none';
};

const showError = (input, message) => {
    input.classList.add('error');
    input.nextElementSibling.textContent = message;
};

signupButton.click(function () {
    let hasError = false;

    // Проверка на пустоту и валидация по регулярным выражениям
    if (!fullnameInput.value || !nameRegex.test(fullnameInput.value)) {
        showError(fullnameInput, 'Full Name может содержать только буквы и пробелы');
        hasError = true;
    }
    if (!usernameInput.value || !usernameRegex.test(usernameInput.value)) {
        showError(usernameInput, 'Username может содержать только буквы, цифры, подчеркивания и тире');
        hasError = true;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        hasError = true;
        confirmPasswordInput.nextElementSibling.textContent = 'Пароли не совпадают';
    }

    if (!emailInput.value || !emailRegex.test(emailInput.value)) {
        showError(emailInput, 'Введите корректный адрес электронной почты.');
        hasError = true;
    }

    if (!passwordInput.value || !passwordRegex.test(passwordInput.value)) {
        alert('Пароль должен содержать не менее 8 символов');
        hasError = true;
    }
    if (!termsCheckbox.checked) {
        hasError = true;
        termsCheckbox.nextElementSibling.textContent = 'Необходимо согласиться с условиями';
    }

    if (!hasError) {
        const user = {
            fullname: fullnameInput.value,
            username: usernameInput.value,
            email: emailInput.value,
        };
        saveUser(user);
        showModal();
    }
})

// Функция для сохранения данных пользователя
const saveUser = (user) => {
    let clients = JSON.parse(localStorage.getItem('clients')) || [];
    clients.push(user);
    localStorage.setItem('clients', JSON.stringify(clients));
};



modalCloseButton.addEventListener('click', hideModal);


