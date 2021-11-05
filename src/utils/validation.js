import {VALIDATION_EMAIL} from "./constants.js";

export const validation = () => {
    const submitButton = document.querySelector('.main-form__button-submit');
    const input = [...document.getElementsByTagName('input')];

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();

        checkInputs(input)
    })
}

const checkInputs = (input) => {
    input.forEach((elem) => {
        if(elem.id === 'first-name' || elem.id === 'last-name') {
            checkName(elem);
        }
        else if(elem.id === 'email') {
            checkEmail(elem);
        }
        else if(elem.id === 'password' || elem.id === 'confirm-password') {
            checkPassword(elem)
        }
    });
}

const checkName = (firstOrLastName) => {
    if(firstOrLastName.value === '') {
        setError(firstOrLastName, `${firstOrLastName.id === 'first-name' ? 'First Name is empty' : 'Last Name is empty'}`);
    } else {
        setSuccess(firstOrLastName)
    }
}

const checkPassword = (password) => {
    if(password.value === '') {
        setError(password, 'Password is empty.');
    } else if(password.value.length < 6) {
        setError(password, 'Password length is less than 6 characters.')
    } else {
        setSuccess(password)
    }
}

const checkEmail = (email) => {
    if(email.value === '') {
        setError(email, 'Email is empty.');
    } else if(!isEmail(email.value)) {
        setError(email, 'Not a valid email.');
    } else {
        setSuccess(email)
    }
}

const setError = (input, message) => {
    input.classList.add('input-error');
    const error = document.querySelector(`.error__${input.id}`);
    error.innerHTML = message;
    error.style = 'display: block';
}

const setSuccess = (input) => {
    if (input.classList.contains('input-error')) {
        const error = document.querySelector(`.error__${input.id}`);
        input.classList.remove('input-error')
        error.style = 'display: none';
    }
}

const isEmail = (email) => {
    return VALIDATION_EMAIL.test(email);
}