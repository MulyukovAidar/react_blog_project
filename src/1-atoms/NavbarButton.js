import React, { Component } from 'react';
import './NavbarButton.css'

class NavbarButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: this.text,
        };
    }

    render(){
        return(
            <button className="navbar-button">{this.props.text}</button>
        )
    }
}

export default NavbarButton;
