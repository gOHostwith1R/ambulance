import SignUp from "../views/pages/SignUp.js";
import SignIn from "../views/pages/SignIn.js";
import RestorePassword from "../views/pages/RestorePassword.js";
import RestorePasswordEmail from "../views/pages/RestorePasswordEmail.js";
import Patients from "../views/pages/Patients.js";

export const routes = [
    { path: '/', view: SignUp },
    { path: '/sign-up', view: SignUp },
    { path: '/sign-in', view: SignIn},
    { path: '/restore-password', view: RestorePassword},
    { path: '/restore-password-email', view: RestorePasswordEmail},
    { path: '/patients', view: Patients},
];