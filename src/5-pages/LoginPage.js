import React from 'react';
import Navbar from '../2-molecules/Navbar';
import Footer from '../2-molecules/Footer';
import LoginForm from '../2-molecules/LoginForm';

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
