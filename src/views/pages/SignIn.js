import AbstractView from "./AbstractView.js";

export default class SignIn extends AbstractView {
    constructor() {
        super();
        this.setTitle('Sign In')
    }

    getHtml () {
        return `
        <div class="wrapper">
         <header class="header">
        <h2 class="header-title">Sign In</h2>
      </header>
      <main class="main">
        <form class="main-form">
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
              <input type="password" class="password" id="password" placeholder="Password">
              <span class="main-form__input-error-message error__password"></span>
              <img src="../../../assets/svg/visible-password-icon.svg" alt="visible-password-icon" class="main-form__input-password-visible-icon">
            </label>
          </div>
          <span class="main-form__input-error-message">Password contain unsupported characters</span>
          <div class="main-form__button">
            <button class="main-form__button-submit" type="submit">Sign in</button>
          </div>
          <a href="/restore-password-email" data-link class="main-forgot-link">Forgot Password?</a>
        </form>
      </main>
      <footer class="footer">
        <p class="footer-title">Don't have an account?</p>
        <a class="footer-link" data-link href="/sign-up">Sign up</a>
      </footer>
      </div>
        `
    }
}