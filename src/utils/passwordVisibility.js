export const passwordVisibility = (match) => {
    const visiblePassword = document.querySelectorAll(".main-form__input-password-visible-icon");
    const inputPassword = document.querySelectorAll(".password");
    const body = document.getElementsByTagName('body');

    if(match.route.path === '/patients') {
        body[0].classList.add('patients');
    } else {
        body[0].classList.add('auth');
    }
    visiblePassword.forEach((elem) => {
        elem.addEventListener('click', () => {
            inputPassword.forEach((input) => {
                input.classList.toggle('password');
                input.classList.toggle('text');

                if(input.classList.contains('text')) {
                    input.type = 'text';
                }
                else {
                    input.type = 'password';
                }
            })
        })
    })
}