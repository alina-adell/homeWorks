const form = document.querySelector('.block .register');
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
    const usernameRegex = /^[a-zA-Z0-9_-]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    form.addEventListener('signup', (evt) => {
        evt.preventDefault();

        if (!fullNameInput.value) {
            alert('Заполните поле Full Name');
            return;
        }

        if (!usernameInput.value) {
            alert('Заполните поле Your username');
            return;
        }

        if (!emailInput.value) {
            alert('Заполните поле E-mail');
            return;
        }

        if (passwordInput.value.length < 8) {
            alert('Пароль должен содержать не менее 8 символов');
            return;
        }

        if (passwordInput.value !== passwordRepeatInput.value) {
            alert('Пароли не совпадают');
            return;
        }
        if (!checkbox.checked) {
            alert('Вы должны согласиться с условиями');
            return;
        }

        openModal();
    });



    fullNameInput.addEventListener('input', function (event) {
        const value = event.target.value;
        const regex = /\d/;

        if (regex.test(value)) {
            event.target.value = value.replace(regex, '');
        }
    });


    usernameInput.addEventListener('input', function (event) {
        const value = event.target.value;
        const regex = /[.,]/;

        if (regex.test(value)) {
            event.target.value = value.replace(regex, '');
        }
    });

    checkbox.addEventListener('change', function (event) {
        const message = event.target.checked ? 'Согласен' : 'Не согласен';
        console.log(message);
    });

    function openModal(event) {
        console.log("Вызвана функция openModal()");
        modal.classList.add('active');
        console.log("Модальное окно открыто");
    }




    function closeModal() {
        console.log("Вызвана функция closeModal()");
        modal.classList.remove('active');

    }

    closeButton.addEventListener("click", function () {
        switchToLogin();
        closeModal();

    });

    function loginValidation() {
        const usernameSign = document.getElementById('username');
        const passwordSign = document.getElementById('psw');

        if (!usernameSign) {
            alert('Заполните поле Your username');
            return;
        }

        if (passwordSign.value.length < 8) {
            alert('Пароль должен содержать не менее 8 символов');
            return;
        }

        alert('Добро пожаловать, ' + usernameSign.value + '!');

    }


    function switchToLogin() {
        switchTitle.textContent = 'Log in to the system';
        fullNameInput.parentElement.remove();
        usernameInput.value = '';
        emailInput.parentElement.remove();
        passwordInput.value = '';
        passwordRepeatInput.parentElement.remove();
        checkbox.remove();
        signupButton.textContent = 'Sign In';
        loginLink.remove();

        // clearForm();


        signupButton.removeEventListener('click', signupHandler);
        signupButton.addEventListener('click', loginValidation);
        signupButton.setAttribute('type', 'button');

    }


    loginLink.addEventListener('click', switchToLogin);
















//
//
// let form = $('.block .register');
// let fullnameInput = $('#fullname');
// let usernameInput = $('#username');
// let emailInput = $('#email');
// let passwordInput = $('#psw');
// let confirmPasswordInput = $('#psw-repeat');
// let termsCheckbox = $('#terms');
// let signupButton = $('#signup');
// let modal = $('#modal');
// let modalCloseButton = $('#modal__close');
//
//
//
// const showModal = () => {
//     modal.style.display = 'block';
// };
//
// const hideModal = () => {
//     modal.style.display = 'none';
// };
//
// const showError = (input, message) => {
//     input.classList.add('error');
//     input.nextElementSibling.textContent = message;
// };
//
// form.addEventListener('submit', (evt) => {
//     evt.preventDefault();
//
// signupButton.click(function () {
//     let hasError = false;
//
//     // Проверка на пустоту и валидация по регулярным выражениям
//     if (!fullnameInput.value || !nameRegex.test(fullnameInput.value)) {
//         showError(fullnameInput, 'Full Name может содержать только буквы и пробелы');
//         hasError = true;
//     }
//     if (!usernameInput.value || !usernameRegex.test(usernameInput.value)) {
//         showError(usernameInput, 'Username может содержать только буквы, цифры, подчеркивания и тире');
//         hasError = true;
//     }
//
//     if (passwordInput.value !== confirmPasswordInput.value) {
//         hasError = true;
//         confirmPasswordInput.nextElementSibling.textContent = 'Пароли не совпадают';
//     }
//
//     if (!emailInput.value || !emailRegex.test(emailInput.value)) {
//         showError(emailInput, 'Введите корректный адрес электронной почты.');
//         hasError = true;
//     }
//
//     if (!passwordInput.value || !passwordRegex.test(passwordInput.value)) {
//         alert('Пароль должен содержать не менее 8 символов');
//         hasError = true;
//     }
//     if (!termsCheckbox.checked) {
//         hasError = true;
//         termsCheckbox.nextElementSibling.textContent = 'Необходимо согласиться с условиями';
//     }
//
//     if (!hasError) {
//         const user = {
//             fullname: fullnameInput.value,
//             username: usernameInput.value,
//             email: emailInput.value,
//         };
//         saveUser(user);
//         showModal();
//     }
// })
//
// // Функция для сохранения данных пользователя
// const saveUser = (user) => {
//     let clients = JSON.parse(localStorage.getItem('clients')) || [];
//     clients.push(user);
//     localStorage.setItem('clients', JSON.stringify(clients));
// };
//
//
//
// modalCloseButton.addEventListener('click', hideModal);})
//
//
