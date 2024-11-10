const form = document.querySelector('.block.register');
const fullNameInput = document.getElementById('fullname');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('psw');
const passwordRepeatInput = document.getElementById('psw-repeat');
const checkbox = document.getElementById('terms');
const signupButton = document.getElementById('signup');
const modal = document.getElementById('modal');
const closeButton = document.getElementById('modal__close');
const switchTitle = document.getElementById('title');
const loginLink = document.getElementById('login-link');


const nameRegex = /^[A-Za-zА-Яа-яё\s]+$/;
const usernameRegex = /^[A-Za-zА-Яа-яё0-9_-]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


function showError(input, message) {
    const parent = input.parentNode;
    const errorMessage = document.createElement('div')
    errorMessage.classList.add('error-message')
    errorMessage.textContent = message
    input.classList.add('errors')
    parent.append(errorMessage)
}

function removeError(input) {
    const parent = input.parentNode;
    if (input.classList.contains('errors')) {
        parent.querySelector('.error-message').remove()
        input.classList.remove('errors');
    }
}
function openModal(event) {
    console.log("Вызвана функция openModal()");
    modal.classList.add('active');
    console.log("Модальное окно открыто");
}

function validation(form) {
    let result = true;


    [fullNameInput, usernameInput, emailInput, passwordInput, passwordRepeatInput, checkbox].forEach(input => removeError(input));

    if (!fullNameInput.value || !nameRegex.test(fullNameInput.value)) {
        showError(fullNameInput, 'Full Name может содержать только буквы и пробелы');
        result = false;
    }
    if (!usernameInput.value || !usernameRegex.test(usernameInput.value)) {
        showError(usernameInput, 'Username может содержать только буквы, цифры, подчеркивания и тире');
        result = false;
    }

    if (passwordRepeatInput.value  !== passwordInput.value) {
        showError(passwordRepeatInput, 'Пароли не совпадают');
        result = false;
    }

    if (!emailInput.value || !emailRegex.test(emailInput.value)) {
        showError(emailInput, 'Введите корректный адрес электронной почты.');
        result = false;
    }

    if  (!passwordInput.value || !passwordRegex.test(passwordInput.value)) {
            showError(passwordInput, 'Пароль должен содержать не менее 8 символов,  хотя бы одна буква в верхнем регистре, одна цифра, один спецсимвол');
        result = false;
        }

    if (!checkbox.checked) {
        showError(checkbox, 'Вы должны согласиться с условиями');
        result = false;
    }
    return result;
}

checkbox.addEventListener('change', function (event) {
    const message = event.target.checked ? 'Согласен' : 'Не согласен';
    console.log(message);
});

form.addEventListener('submit', function (event) {
    event.preventDefault()

    if (validation(this) == true) {
        openModal();
    }
})



function closeModal() {
    console.log("Вызвана функция closeModal()");
    modal.classList.remove('active');
    fullNameInput.value = '';
    usernameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
    passwordRepeatInput.value = '';
    checkbox.checked = false;
    [fullNameInput, usernameInput, emailInput, passwordInput, passwordRepeatInput, checkbox].forEach(input => removeError(input));
}

closeButton.addEventListener("click", function () {
    closeModal();
});
