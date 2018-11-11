import React from 'react';
import './LoginForm.css'
import LoginButton from "../1-atoms/LoginButton";

class LoginForm extends React.Component{
    render(){
        return(
            <div className="form-section pure-u-1-3">
                <form method="post" >
                    <h1>Введите данные учетной записи</h1>
                    <input id="username" className="form" name="username"  placeholder="Логин"/>
                    <input id="password" className="form" name="password" placeholder="Пароль"/>
                    {/*<button className="" type="submit">Авторизоваться</button>*/}
                    <LoginButton/>
                    </form>
            </div>
        );
    }
}

export default LoginForm;
