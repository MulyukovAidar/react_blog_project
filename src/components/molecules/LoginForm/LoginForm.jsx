import React from 'react';
import styles from './styles.module.css';
import LoginButton from '../../atoms/LoginButton/LoginButton';
import RegisterLink from '../../atoms/RegisterLink/RegisterLink';
import UserDataInput from '../../atoms/UserDataInput/UserDataInput';

class LoginForm extends React.Component {
    initialState = {
      login: '',
      password: '',
    };

    state = this.initialState;


    render() {
      return (
        <div className={styles.wide}>
          {/* todo fix width on mobile devices */}
          <div className="form-section pure-u-1-3">
            <form method="post">
              <h1>Введите данные учетной записи</h1>
              <UserDataInput id="email" className={styles.form} name="email" placeholder="example@email.com" autoFocus />
              <UserDataInput id="password" className={styles.form} name="password" placeholder="*******" />
              <LoginButton />
              <hr className={styles.line} />
              <RegisterLink />
            </form>
          </div>
        </div>
      );
    }
}

export default LoginForm;
