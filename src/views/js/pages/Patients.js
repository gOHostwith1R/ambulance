import AbstractView from "./AbstractView.js";
import {getDoctor, status, getPatients} from "../../../models/models.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('Patients')
        this.doctorData = getDoctor();
        this.status = status;
        this.patientsData = getPatients();
        this.empty = true;
    }


    async getHtml () {
        return `
        <div class="wrapper-patient">
            <header class="header-patient">
                <img src="../../../../assets/image/logo.png" alt="logo">
            <div class="header-patient-container">
                <img src="../../../../assets/image/avatar-doctor.png" alt="avatar-doctor">
                <img src="../../../../assets/svg/indicator.svg" alt="indicator" class="header-indicator">
            </div>
            </header>
            <main class="main-patient">
                <div class="main-patient__buttons">
                    <button type="button" class="main-patient__active-btn">Patients</button>
                    <button type="button" class="main-patient__inactive-btn">Resolutions</button>
                </div>
                <div class="main-patient__header">
                    <h2 class="main-patient__title">My Patients</h2>
                    ${this.empty ? `
                    <div class="main-patient__header-icon">
                        <div class="main-patient__header-search">
                            <img src="../../../../assets/svg/search.svg" alt="search" class="main-patient__search-icon">
                            <p class="header-search__text">Search</p>
                        </div>
                        <div class="main-patient__header-slider">
                            <img src="../../../../assets/svg/sliders-v-alt.svg" alt="slider-v-alt">
                        </div>
                        <div class="main-patient__header-slider-1366">
                        <p class="main-slider__text">Sort by:</p>
                        <ul class="dropdown">
                                <li class="dropdown-main-item">
                                    Date
                                    <img class="dropdown-arrow" src="../../../../assets/svg/arrow-dropdown.svg" alt="arrow">
                                        <ul class="dropdown">
                                          <li class="dropdown-item"><a href="#">Date</a></li>
                                          <li class="dropdown-item"><a href="#">Name</a></li>
                                </li>
                            </ul>
                        </div>
                    </div> ` : `<div></div>` }
                </div>
                ${this.empty ? `
                <div class="container-patient">
                    <div class="card-patient">
                        <header class="card-title">
                            <img src="../../../../assets/image/avatar-patient.png" alt="avatar-patient" class="avatar-patient">
                            <div class="card-patient__container">
                                <h3 class="card-patient__name">Zachary Adkidon</h3>
                                <div class="card-patient__container-status">
                                    <img class="card-patient-indicator" src="../../../../assets/svg/indicator.svg" alt="indicator">
                                    <p class="card-patient__describe-status">Appointment is confirmed</p>
                                </div>
                            </div>
                            <img class="card-title__more-icon" src="../../../../assets/svg/more-vertical.svg" alt="more-vertical">
                        </header>
                        <main class="card-main">
                            <div class="card-data">
                                <img src="../../../../assets/svg/clock.svg" alt="clock">
                                <p class="card-data__text">Thu Sept 10, 2021 4 pm – 5 pm</p>
                             </div>
                             <div class="card-description">
                                <img src="../../../../assets/svg/list.svg" alt="list">
                                <p class="card-description__text">We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels</p>
                             </div>
                        </main>
                    </div> 
                     <div class="card-patient">
                        <header class="card-title">
                            <img src="../../../../assets/image/avatar-patient.png" alt="avatar-patient" class="avatar-patient">
                            <div class="card-patient__container">
                                <h3 class="card-patient__name">Zachary Adkidon</h3>
                                <div class="card-patient__container-status">
                                    <img class="card-patient-indicator" src="../../../../assets/svg/indicator.svg" alt="indicator">
                                    <p class="card-patient__describe-status">Appointment is confirmed</p>
                                </div>
                            </div>
                            <img class="card-title__more-icon" src="../../../../assets/svg/more-vertical.svg" alt="more-vertical">
                        </header>
                        <main class="card-main">
                            <div class="card-data">
                                <img src="../../../../assets/svg/clock.svg" alt="clock">
                                <p class="card-data__text">Thu Sept 10, 2021 4 pm – 5 pm</p>
                             </div>
                             <div class="card-description">
                                <img src="../../../../assets/svg/list.svg" alt="list">
                                <p class="card-description__text">We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels</p>
                             </div>
                        </main>
                    </div>
                    <div class="card-patient">
                        <header class="card-title">
                            <img src="../../../../assets/image/avatar-patient.png" alt="avatar-patient" class="avatar-patient">
                            <div class="card-patient__container">
                                <h3 class="card-patient__name">Zachary Adkidon</h3>
                                <div class="card-patient__container-status">
                                    <img class="card-patient-indicator" src="../../../../assets/svg/indicator.svg" alt="indicator">
                                    <p class="card-patient__describe-status">Appointment is confirmed</p>
                                </div>
                            </div>
                            <img class="card-title__more-icon" src="../../../../assets/svg/more-vertical.svg" alt="more-vertical">
                        </header>
                        <main class="card-main">
                            <div class="card-data">
                                <img src="../../../../assets/svg/clock.svg" alt="clock">
                                <p class="card-data__text">Thu Sept 10, 2021 4 pm – 5 pm</p>
                             </div>
                             <div class="card-description">
                                <img src="../../../../assets/svg/list.svg" alt="list">
                                <p class="card-description__text">We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels</p>
                             </div>
                        </main>
                    </div>
                    <div class="card-patient">
                        <header class="card-title">
                            <img src="../../../../assets/image/avatar-patient.png" alt="avatar-patient" class="avatar-patient">
                            <div class="card-patient__container">
                                <h3 class="card-patient__name">Zachary Adkidon</h3>
                                <div class="card-patient__container-status">
                                    <img class="card-patient-indicator" src="../../../../assets/svg/indicator.svg" alt="indicator">
                                    <p class="card-patient__describe-status">Appointment is confirmed</p>
                                </div>
                            </div>
                            <img class="card-title__more-icon" src="../../../../assets/svg/more-vertical.svg" alt="more-vertical">
                        </header>
                        <main class="card-main">
                            <div class="card-data">
                                <img src="../../../../assets/svg/clock.svg" alt="clock">
                                <p class="card-data__text">Thu Sept 10, 2021 4 pm – 5 pm</p>
                             </div>
                             <div class="card-description">
                                <img src="../../../../assets/svg/list.svg" alt="list">
                                <p class="card-description__text">We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels</p>
                             </div>
                        </main>
                    </div>
                     <div class="card-patient">
                        <header class="card-title">
                            <img src="../../../../assets/image/avatar-patient.png" alt="avatar-patient" class="avatar-patient">
                            <div class="card-patient__container">
                                <h3 class="card-patient__name">Zachary Adkidon</h3>
                                <div class="card-patient__container-status">
                                    <img class="card-patient-indicator" src="../../../../assets/svg/indicator.svg" alt="indicator">
                                    <p class="card-patient__describe-status">Appointment is confirmed</p>
                                </div>
                            </div>
                            <img class="card-title__more-icon" src="../../../../assets/svg/more-vertical.svg" alt="more-vertical">
                        </header>
                        <main class="card-main">
                            <div class="card-data">
                                <img src="../../../../assets/svg/clock.svg" alt="clock">
                                <p class="card-data__text">Thu Sept 10, 2021 4 pm – 5 pm</p>
                             </div>
                             <div class="card-description">
                                <img src="../../../../assets/svg/list.svg" alt="list">
                                <p class="card-description__text">We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels</p>
                             </div>
                        </main>
                    </div>
                     <div class="card-patient">
                        <header class="card-title">
                            <img src="../../../../assets/image/avatar-patient.png" alt="avatar-patient" class="avatar-patient">
                            <div class="card-patient__container">
                                <h3 class="card-patient__name">Zachary Adkidon</h3>
                                <div class="card-patient__container-status">
                                    <img class="card-patient-indicator" src="../../../../assets/svg/indicator.svg" alt="indicator">
                                    <p class="card-patient__describe-status">Appointment is confirmed</p>
                                </div>
                            </div>
                            <img class="card-title__more-icon" src="../../../../assets/svg/more-vertical.svg" alt="more-vertical">
                        </header>
                        <main class="card-main">
                            <div class="card-data">
                                <img src="../../../../assets/svg/clock.svg" alt="clock">
                                <p class="card-data__text">Thu Sept 10, 2021 4 pm – 5 pm</p>
                             </div>
                             <div class="card-description">
                                <img src="../../../../assets/svg/list.svg" alt="list">
                                <p class="card-description__text">We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels</p>
                             </div>
                        </main>
                    </div>
                     <div class="card-patient">
                        <header class="card-title">
                            <img src="../../../../assets/image/avatar-patient.png" alt="avatar-patient" class="avatar-patient">
                            <div class="card-patient__container">
                                <h3 class="card-patient__name">Zachary Adkidon</h3>
                                <div class="card-patient__container-status">
                                    <img class="card-patient-indicator" src="../../../../assets/svg/indicator.svg" alt="indicator">
                                    <p class="card-patient__describe-status">Appointment is confirmed</p>
                                </div>
                            </div>
                            <img class="card-title__more-icon" src="../../../../assets/svg/more-vertical.svg" alt="more-vertical">
                        </header>
                        <main class="card-main">
                            <div class="card-data">
                                <img src="../../../../assets/svg/clock.svg" alt="clock">
                                <p class="card-data__text">Thu Sept 10, 2021 4 pm – 5 pm</p>
                             </div>
                             <div class="card-description">
                                <img src="../../../../assets/svg/list.svg" alt="list">
                                <p class="card-description__text">We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels</p>
                             </div>
                        </main>
                    </div>
                     <div class="card-patient">
                        <header class="card-title">
                            <img src="../../../../assets/image/avatar-patient.png" alt="avatar-patient" class="avatar-patient">
                            <div class="card-patient__container">
                                <h3 class="card-patient__name">Zachary Adkidon</h3>
                                <div class="card-patient__container-status">
                                    <img class="card-patient-indicator" src="../../../../assets/svg/indicator.svg" alt="indicator">
                                    <p class="card-patient__describe-status">Appointment is confirmed</p>
                                </div>
                            </div>
                            <img class="card-title__more-icon" src="../../../../assets/svg/more-vertical.svg" alt="more-vertical">
                        </header>
                        <main class="card-main">
                            <div class="card-data">
                                <img src="../../../../assets/svg/clock.svg" alt="clock">
                                <p class="card-data__text">Thu Sept 10, 2021 4 pm – 5 pm</p>
                             </div>
                             <div class="card-description">
                                <img src="../../../../assets/svg/list.svg" alt="list">
                                <p class="card-description__text">We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels</p>
                             </div>
                        </main>
                    </div>
                </div>`
            :
                `<div class="empty-patients">
                     <img src="../../../../assets/svg/medical-history-icon.svg" alt="medical-history">
                     <p class="empty-patients__text">You have no patients yet. To create a patient profile, please contact your administrator.</p>
                </div>`
            }
            </main> 
        </div>    
       `;
    }
}