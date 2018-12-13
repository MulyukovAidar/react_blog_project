import React from 'react';
import Navbar from '../molecules/Navbar/Navbar';
import Footer from '../molecules/Footer/Footer';
import LoginForm from '../molecules/LoginForm/LoginForm';

class LoginPage extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <LoginForm/>
                <Footer/>
            </div>
        );
    }
}

export default LoginPage;
