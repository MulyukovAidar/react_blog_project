import React from 'react';
import Navbar from "../molecules/Navbar";
import Footer from "../molecules/Footer";
import Card from '../molecules/Card';

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
