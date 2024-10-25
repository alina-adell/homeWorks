window.addEventListener('load', function () {
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


    fullNameInput.addEventListener('input', function (event) {
        const value = event.target.value;
        const regex = /\d/;

        if (regex.test(value)) {
            event.target.value = value.replace(regex, '');
        }
    });
    // Эта функция проверяет нажатые клавиши и удаляет любые цифры,
// которые пользователь пытается ввести.

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




    function signupHandler(event) {

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
        event.preventDefault();

        // return;
        //
        // /тут нужно в конце писать return;

    }

    signupButton.addEventListener('click', signupHandler);


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

    // или можно черех функуию очистить. как лучше?
    // function clearForm() {
    //     const inputs = document.querySelectorAll('input');
    //
    //     for (const input of inputs) {
    //         input.value = '';
    //     }
    //
    //
    // }

    loginLink.addEventListener('click', switchToLogin);
});















