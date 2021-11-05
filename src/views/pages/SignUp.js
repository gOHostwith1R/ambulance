import AbstractView from "./AbstractView.js";

export default class SignUp extends AbstractView {
    constructor() {
        super();
        this.setTitle('Sign Up');
    }

    getHtml() {
        return `
       <div class="wrapper">
         <header class="header">
            <h2 class="header-title">Sign Up</h2>
        </header>
        <main class="main">
           <form class="main-form" id="form">
               <div class="main-form__input main-form__input_first-name">
                   <label>
                       <img src="../../../assets/svg/user-icon.svg" alt="user-icon" class="main-form__input-user-icon">
                       <input type="text" placeholder="First Name" id="first-name">
                       <span class="main-form__input-error-message error__first-name"></span>
                   </label>
               </div>
               <div class="main-form__input main-form__input_last-name">
                   <label>
                       <img src="../../../assets/svg/user-icon.svg" alt="user-icon" class="main-form__input-user-icon">
                       <input type="text" placeholder="Last Name" id="last-name">
                       <span class="main-form__input-error-message error__last-name"></span>
                   </label>
               </div>
               <div class="main-form__input main-form__input_email">
                   <label>
                       <img src="../../../assets/svg/mail-icon.svg" alt="mail-icon" class="main-form__input-mail-icon">
                       <input type="email" placeholder="Email" id="email">
                       <span class="main-form__input-error-message error__email"></span>
                   </label>
               </div>
               <div class="main-form__input main-form__input_password">
                   <label>
                       <img src="../../../assets/svg/password-icon.svg" alt="password-icon" class="main-form__input-password-icon">
                       <input type="password" class="password" placeholder="Password" id="password">
                       <span class="main-form__input-error-message error__password"></span>
                       <img src="../../../assets/svg/visible-password-icon.svg" alt="visible-password-icon" class="main-form__input-password-visible-icon">
                   </label>
               </div>
                   <div class="main-form__input main-form__input_password main-form__input_confirm-password">
                   <label>
                       <img src="../../../assets/svg/check-icon.svg" alt="check-icon" class="main-form__input-check-icon">
                       <input type="password" class="password"  placeholder="Confirm Password" id="confirm-password">
                       <span class="main-form__input-error-message error__confirm-password"></span>
                       <img src="../../../assets/svg/visible-password-icon.svg" alt="visible-password-icon" class="main-form__input-password-visible-icon">
                   </label>
               </div>
               <div class="main-form__button">
                   <button class="main-form__button-submit" type="submit">Sign up</button>
               </div>
           </form>
        </main>
        <footer class="footer">
            <p class="footer-title">Already have an account?</p>
            <a class="footer-link" href="/sign-in" data-link>Sign in</a>
        </footer>
        </div>
        `;
    }
}