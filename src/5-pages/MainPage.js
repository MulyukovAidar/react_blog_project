import React from 'react';
import Navbar from "../2-molecules/Navbar";
import Footer from "../2-molecules/Footer";
import Card from '../2-molecules/Card';

class MainPage extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <div className="posts"><Card/><Card/><Card/></div>
                <Footer/>
            </div>
        )
    }

}


export default MainPage;
