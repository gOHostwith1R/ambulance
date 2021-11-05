import AbstractView from "./AbstractView.js";

export default class RestorePasswordEmail extends AbstractView {
    constructor() {
        super();
        this.setTitle('Restore Password')
    }

    getHtml () {
        return `
        <div class="wrapper">
         <header class="header header-restore-password">
         <a href="/sign-up" data-link>
          <img src="../../../assets/svg/arrow-left-gray.svg" alt="arrow-left" class="header-arrow">
          </a>
          <h2 class="header-title">Restore password</h2>
      </header>
      <main class="main">
          <form class="main-form">
              <div class="main-form__input main-restore-password">
                  Please use your email address, and we’ll send you the link to reset your password
              </div>
              <div class="main-form__input main-form__input_email">
                  <label>
                      <img src="../../../assets/svg/mail-icon.svg" alt="mail-icon" class="main-form__input-mail-icon">
                      <input type="email" id="email" placeholder="Email">
                      <span class="main-form__input-error-message error__email"></span>
                  </label>
              </div>
               <a href="/restore-password" data-link>
                    <div class="main-form__button">
                         <button class="main-form__button-submit main-form__button-submit-restore-password" type="button">Send Reset Link</button>
                    </div>
              </a>
          </form>
      </main>
      </div>
        `
    }
}