import React, { Component } from 'react';
import './NavbarButton.css'
import {Link} from "react-router-dom";

class NavbarButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: this.text,
        };
    }

    render(){
        return(
            // todo link to
            <Link to={this.props.link} className="navbar-button">{this.props.text}</Link>
        )
    }
}

export default NavbarButton;
