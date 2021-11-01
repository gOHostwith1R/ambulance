import SignUp from "./pages/SignUp.js";
import SignIn from "./pages/SignIn.js";
import RestorePassword from "./pages/RestorePassword.js";
import RestorePasswordEmail from "./pages/RestorePasswordEmail.js";
import Patients from "./pages/Patients.js";

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        { path: '/', view: SignUp },
        { path: '/sign-up', view: SignUp },
        { path: '/sign-in', view: SignIn},
        { path: '/restore-password', view: RestorePassword},
        { path: '/restore-password-email', view: RestorePasswordEmail},
        { path: '/patients', view: Patients},
    ];

    const potentialMatches = routes.map(route => {
       return {
           route: route,
           isMatch: location.pathname === route.path
       }
    });

    let match = potentialMatches.find(potentialMatches => potentialMatches.isMatch)

    if(!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    const view = new match.route.view();
    document.querySelector("#root").innerHTML = await view.getHtml();

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
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if(e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href)
        }

    });

    router();
})
