import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('Restore Password')
    }

    async getHtml() {
        return `
        <header class="header header-restore-password">
        <a href="/sign-up" data-link>
        <img src="../../../../../assets/svg/arrow-left-gray.svg" alt="arrow-left" class="header-arrow">
        </a>
        <h2 class="header-title">Restore password</h2>
    </header>
    <main class="main">
            <div class="main-restore-password main-restore-password-without-mail">
                An email has been sent to example@exam.com. Check your inbox, and click the reset link provided.
            </div>
    </main>`
    }

}