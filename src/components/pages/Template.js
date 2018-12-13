import React from 'react';
import Navbar from "../molecules/Navbar/Navbar";
import Footer from "../molecules/Footer/Footer";

class Template extends React.Component{
    render(){
        return(
          <div>
              <Navbar/>
              <img alt="penguin" src="https://ichef.bbci.co.uk/news/ws/320/amz/worldservice/live/assets/images/2016/01/12/160112125613_penguins_walking_624x460_thinkstock_nocredit.jpg"/>
              <Footer/>
          </div>
        );
    }
}

export default Template;
