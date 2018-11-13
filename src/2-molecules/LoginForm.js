import React from 'react';
import './LoginForm.css'
import LoginButton from "../1-atoms/LoginButton";

class LoginForm extends React.Component {
    render() {
        return (
          <div className="wide">
                <div className="form-section pure-u-1-3">
                    <form method="post">
                        <h1>Введите данные учетной записи</h1>
                        <input id="email" className="form" name="email" placeholder="example@email.com"/>
                        <input id="password" className="form" name="password" placeholder="*******"/>
                        <LoginButton/>
                    </form>
                </div>
          </div>
        );
    }
}

export default LoginForm;
