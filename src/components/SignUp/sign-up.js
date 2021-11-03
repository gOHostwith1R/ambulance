import React from 'react';
import { ReactComponent as UserIcon} from '../../assets/svg/user-icon.svg'
import { ReactComponent as EmailIcon} from '../../assets/svg/mail-icon.svg'
import { ReactComponent as PasswordIcon} from '../../assets/svg/password-icon.svg';
import { ReactComponent as CheckPassword} from '../../assets/svg/check-icon.svg';
import {ReactComponent as VisiblePassword} from '../../assets/svg/visible-password-icon.svg';

const SignUp = () => {
    return (
       <>
           <header>
               <h2 className='app-main__title'>Sign Up</h2>
           </header>
           <main className="app-main__form">
               <div className="app-main__form__fn">
                   <label>
                       <input type="text" required placeholder="First Name"/>
                   </label>
               </div>
               <div className="app-main__form__ln">
                   <label>
                       <input type="text" required placeholder="Last Name"/>
                   </label>
               </div>
               <div className="app-main__form__email">
                   <label>
                       <input type="email" required placeholder="Email"/>
                   </label>
               </div>
               <div className="app-main__form__password">
                   <label>
                       <input type="password" required placeholder="Password"/>
                       <VisiblePassword alt='visible-password' className='visible-password' />
                   </label>
               </div>
               <div className="app-main__form__confirm-password">
                   <label>
                       <input type="password" required placeholder="Confirm Password"/>
                       <VisiblePassword alt='visible-password' className='visible-password' />
                   </label>
               </div>
           </main>
       </>
    );
};

export default SignUp;