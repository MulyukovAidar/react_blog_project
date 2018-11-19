import React from 'react';
import Navbar from '../molecules/Navbar';
import Footer from '../molecules/Footer';
import LoginForm from '../molecules/LoginForm';

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
