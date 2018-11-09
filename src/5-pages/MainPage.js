import React from 'react';
import Navbar from "../2-molecules/Navbar";
import Post from "../2-molecules/Post";
import Footer from "../2-molecules/Footer";


class MainPage extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <div className="posts"><Post/><Post/><Post/></div>
                <Footer/>
            </div>
        )
    }

}


export default MainPage;
